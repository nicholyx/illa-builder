import { FC, ReactElement, Children, isValidElement, cloneElement } from "react"
import { DropdownProps } from "./interface"
import { Trigger } from "@illa-design/trigger"
import { useMergeValue, omit } from "@illa-design/system"

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    children,
    droplist,
    disabled,
    position = "bl",
    trigger = "hover",
    triggerProps,
    defaultPopupVisible,
    popupVisible,
    getPopupContainer,
    onVisibleChange,
    ...otherProps
  } = props

  const [currentPopupVisible, setCurrentPopupVisible] = useMergeValue(false, {
    defaultValue: props.defaultPopupVisible,
    value: props.popupVisible,
  })

  const getContent = () => {
    return Children.only(droplist || <span />) as ReactElement
  }

  const changePopupVisible = (visible: boolean) => {
    setCurrentPopupVisible(visible)
    onVisibleChange?.(visible)
    triggerProps?.onVisibleChange?.(visible)
  }

  const content = getContent()

  return (
    <Trigger
      trigger={trigger}
      disabled={disabled}
      position={position}
      popupVisible={currentPopupVisible}
      content={
        content && content.props.isMenu
          ? cloneElement(content as ReactElement, {
              inDropdown: true,
              selectable: false,
              onClickMenuItem: (key: string, event: any) => {
                let clickMenuEventValue = null

                const content = getContent()
                if (content?.props?.onClickMenuItem) {
                  clickMenuEventValue = content.props?.onClickMenuItem(
                    key,
                    event,
                  )
                }

                if (clickMenuEventValue instanceof Promise) {
                  clickMenuEventValue?.finally(() => changePopupVisible(false))
                } else if (clickMenuEventValue !== false) {
                  changePopupVisible(false)
                }
              },
            })
          : content
      }
      onVisibleChange={(visible: boolean) => {
        if (visible !== popupVisible) {
          changePopupVisible(visible)
        }
      }}
      {...(triggerProps ? omit(triggerProps, ["onVisibleChange"]) : {})}
      {...otherProps}
    >
      {isValidElement(children)
        ? cloneElement(children, {
            disabled,
          })
        : children}
    </Trigger>
  )
}

Dropdown.displayName = "Dropdown"
