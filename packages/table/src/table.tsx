import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  ReactElement,
  SyntheticEvent,
  useEffect,
} from "react"
import { TableContextProps, TableProps, ThContextProps } from "./interface"
import {
  applyContainerStyle,
  applyFilterContainer,
  applyHeaderIconLeft,
  applyPreContainer,
  applyResizing,
  applyTableStyle,
} from "./style"
import { TableContext } from "./table-context"
import {
  Row,
  useFilters,
  useFlexLayout,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table"
import { Thead } from "./thead"
import { Tr } from "./tr"
import { Th } from "./th"
import { TBody } from "./tbody"
import { Td } from "./td"
import { TFoot } from "./tfoot"
import { ThContext } from "./th-context"
import {
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
} from "@illa-design/icon"
import { Checkbox } from "@illa-design/checkbox"
import { TableData } from "./table-data"

export const Table = forwardRef<HTMLDivElement, TableProps<any>>(
  (props, ref) => {
    if (props.columns == undefined || props.data == undefined) {
      return renderDirectTable(props, ref)
    } else {
      return renderDataDrivenTable(props, ref)
    }
  },
)

function renderDirectTable<D extends TableData>(
  props: TableProps<D>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    columns,
    data,
    bordered,
    borderedCell,
    striped,
    fixedHeader = true,
    children,
    disableSortBy,
    disableFilters,
    disableRowSelect,
    align = "left",
    showFooter,
    disableResizing,
    showHeader = true,
    onRowSelectChange,
    _css,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
  } as TableContextProps

  const headerContextProps = {
    fixedHeader,
  } as ThContextProps

  return (
    <div css={applyContainerStyle(_css)} ref={ref}>
      <ThContext.Provider value={headerContextProps}>
        <TableContext.Provider value={contextProps}>
          <table css={applyTableStyle(tableLayout, bordered)} {...otherProps}>
            {children}
          </table>
        </TableContext.Provider>
      </ThContext.Provider>
    </div>
  )
}

function renderDataDrivenTable<D extends TableData>(
  props: TableProps<D>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement {
  const {
    size = "medium",
    tableLayout = "auto",
    columns = [],
    data = [],
    bordered,
    borderedCell,
    striped,
    fixedHeader = true,
    children,
    disableSortBy,
    disableFilters,
    disableRowSelect,
    align = "left",
    showFooter,
    disableResizing,
    showHeader = true,
    onRowSelectChange,
    _css,
    ...otherProps
  } = props

  const contextProps = {
    align,
    borderedCell,
    striped,
    size,
  } as TableContextProps

  const headerContextProps = {
    fixedHeader,
  } as ThContextProps

  const {
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    getTableProps,
    getTableBodyProps,
    selectedFlatRows,
    allColumns,
  } = useTable<D>(
    {
      columns,
      data,
      disableSortBy,
      disableFilters,
      disableResizing,
    },
    useFilters,
    useSortBy,
    useRowSelect,
    (hooks) => {
      // add selection
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox
              checked={getToggleAllRowsSelectedProps().checked}
              indeterminate={getToggleAllRowsSelectedProps().indeterminate}
              onChange={(_, event: SyntheticEvent) => {
                let changeEvent = getToggleAllRowsSelectedProps().onChange
                if (changeEvent != undefined) {
                  changeEvent({
                    target: event.target,
                  } as ChangeEvent)
                }
              }}
            />
          ),
          disableSortBy: true,
          disableResizing: true,
          width: "0px",
          Cell: ({ row }: { row: Row<D> }) => (
            <Checkbox
              disabled={row.original.disableRowSelect}
              checked={row.getToggleRowSelectedProps().checked}
              indeterminate={row.getToggleRowSelectedProps().indeterminate}
              onChange={(checked: boolean, event: SyntheticEvent) => {
                let changeEvent = row.getToggleRowSelectedProps().onChange
                if (changeEvent != undefined) {
                  changeEvent({
                    target: event.target,
                  } as ChangeEvent)
                }
              }}
            />
          ),
        },
        ...columns,
      ])
    },
    useFlexLayout,
    useResizeColumns,
  )

  // row select event
  if (onRowSelectChange != undefined) {
    onRowSelectChange(selectedFlatRows)
  }

  useEffect(() => {
    // hidden select
    allColumns.map((column) => {
      if (disableRowSelect && column.id == "selection") {
        column.toggleHidden(true)
      } else {
        column.toggleHidden(false)
      }
    })
  }, [disableRowSelect])

  return (
    <div css={applyContainerStyle(_css)} ref={ref}>
      <ThContext.Provider value={headerContextProps}>
        <TableContext.Provider value={contextProps}>
          <table
            css={applyTableStyle(tableLayout, bordered)}
            {...getTableProps()}
            {...otherProps}
          >
            {showHeader && (
              <Thead>
                {headerGroups.map((group) => (
                  <Tr {...group.getHeaderGroupProps()}>
                    {group.headers.map((column, index) => (
                      <Th {...column.getHeaderProps()}>
                        <div
                          css={applyPreContainer}
                          {...column.getSortByToggleProps()}
                        >
                          {column.render("Header")}
                          {column.canSort &&
                            (column.isSorted ? (
                              column.isSortedDesc ? (
                                <SorterDownIcon _css={applyHeaderIconLeft} />
                              ) : (
                                <SorterUpIcon _css={applyHeaderIconLeft} />
                              )
                            ) : (
                              <SorterDefaultIcon _css={applyHeaderIconLeft} />
                            ))}
                        </div>
                        <div css={applyFilterContainer}>
                          {column.canFilter &&
                            column.Filter != undefined &&
                            column.render("Filter")}
                        </div>
                        {column.canResize &&
                          group.headers.indexOf(column) !=
                            group.headers.length - 1 && (
                            <div
                              {...column.getResizerProps()}
                              css={applyResizing(column.canResize)}
                            />
                          )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
            )}
            <TBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </TBody>
            {showFooter && (
              <TFoot>
                {footerGroups.map((group) => (
                  <Tr {...group.getFooterGroupProps()}>
                    {group.headers.map((column, index) => (
                      <Td {...column.getFooterProps()}>
                        {column.render("Footer")}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </TFoot>
            )}
          </table>
        </TableContext.Provider>
      </ThContext.Provider>
    </div>
  )
}

Table.displayName = "Table"
