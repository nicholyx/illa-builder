import { Meta, Story } from "@storybook/react"
import {
  IconProps,
  AddIcon,
  CheckmarkIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownIcon,
  EmptyIcon,
  ErrorIcon,
  ExpandIcon,
  EyeOffIcon,
  EyeOnIcon,
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
  FilterIcon,
  HeartIcon,
  ImageDefaultIcon,
  InfoCircleIcon,
  LikeIcon,
  LinkIcon,
  LoadingIcon,
  MinusIcon,
  MoreIcon,
  NextDoubleIcon,
  NextIcon,
  CaretDownIcon,
  DragPointIcon,
  PenIcon,
  PersonIcon,
  PlusIcon,
  PreDoubleIcon,
  PreIcon,
  ReduceIcon,
  RightIcon,
  SearchIcon,
  ShareIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
  StarIcon,
  SuccessIcon,
  TimeIcon,
  UpIcon,
  UploadIcon,
  WarningCircleIcon,
  WarningIcon,
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
  InfoIcon,
  LeafIcon,
  Result403Icon,
  Result404Icon,
  Result500Icon,
  EmptyStateIcon,
} from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Icon",

  argTypes: {
    spin: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "text",
      },
    },
    _css: {
      control: false,
    },
  },
} as Meta

export const Close: Story<IconProps> = (props: IconProps) => <CloseIcon {...props} />
export const Copy: Story<IconProps> = (props: IconProps) => <CopyIcon {...props} />
export const ImageDefault: Story<IconProps> = (props: IconProps) => (
  <ImageDefaultIcon {...props} />
)
export const Loading: Story<IconProps> = (props: IconProps) => <LoadingIcon {...props} />
export const Like: Story<IconProps> = (props: IconProps) => <LikeIcon {...props} />
export const Share: Story<IconProps> = (props: IconProps) => <ShareIcon {...props} />
export const Star: Story<IconProps> = (props: IconProps) => <StarIcon {...props} />
export const Heart: Story<IconProps> = (props: IconProps) => <HeartIcon {...props} />
export const Person: Story<IconProps> = (props: IconProps) => <PersonIcon {...props} />
export const EyeOn: Story<IconProps> = (props: IconProps) => <EyeOnIcon {...props} />
export const EyeOff: Story<IconProps> = (props: IconProps) => <EyeOffIcon {...props} />
export const Search: Story<IconProps> = (props: IconProps) => <SearchIcon {...props} />
export const Link: Story<IconProps> = (props: IconProps) => <LinkIcon {...props} />
export const Right: Story<IconProps> = (props: IconProps) => <RightIcon {...props} />
export const Error: Story<IconProps> = (props: IconProps) => <ErrorIcon {...props} />
export const Warning: Story<IconProps> = (props: IconProps) => <WarningIcon {...props} />
export const WarningCircle: Story<IconProps> = (props: IconProps) => (
  <WarningCircleIcon {...props} />
)
export const Success: Story<IconProps> = (props: IconProps) => <SuccessIcon {...props} />
export const Reduce: Story<IconProps> = (props: IconProps) => <ReduceIcon {...props} />
export const Empty: Story<IconProps> = (props: IconProps) => <EmptyIcon {...props} />
export const Checkmark: Story<IconProps> = (props: IconProps) => (
  <CheckmarkIcon {...props} />
)
export const Info: Story<IconProps> = (props: IconProps) => <InfoIcon {...props} />
export const InfoCircle: Story<IconProps> = (props: IconProps) => (
  <InfoCircleIcon {...props} />
)
export const Pre: Story<IconProps> = (props: IconProps) => <PreIcon {...props} />
export const Next: Story<IconProps> = (props: IconProps) => <NextIcon {...props} />
export const Up: Story<IconProps> = (props: IconProps) => <UpIcon {...props} />
export const Down: Story<IconProps> = (props: IconProps) => <DownIcon {...props} />
export const CaretDown: Story<IconProps> = (props: IconProps) => (
  <CaretDownIcon {...props} />
)
export const CaretLeft: Story<IconProps> = (props: IconProps) => (
  <CaretLeftIcon {...props} />
)
export const CaretRight: Story<IconProps> = (props: IconProps) => (
  <CaretRightIcon {...props} />
)
export const Expand: Story<IconProps> = (props: IconProps) => <ExpandIcon {...props} />
export const More: Story<IconProps> = (props: IconProps) => <MoreIcon {...props} />
export const Add: Story<IconProps> = (props: IconProps) => <AddIcon {...props} />
export const Minus: Story<IconProps> = (props: IconProps) => <MinusIcon {...props} />
export const Plus: Story<IconProps> = (props: IconProps) => <PlusIcon {...props} />
export const Upload: Story<IconProps> = (props: IconProps) => <UploadIcon {...props} />
export const Delete: Story<IconProps> = (props: IconProps) => <DeleteIcon {...props} />
export const FileWord: Story<IconProps> = (props: IconProps) => <FileWordIcon {...props} />
export const FileDefault: Story<IconProps> = (props: IconProps) => (
  <FileDefaultIcon {...props} />
)
export const FileVideo: Story<IconProps> = (props: IconProps) => (
  <FileVideoIcon {...props} />
)
export const FileExcel: Story<IconProps> = (props: IconProps) => (
  <FileExcelIcon {...props} />
)
export const FileMusic: Story<IconProps> = (props: IconProps) => (
  <FileMusicIcon {...props} />
)
export const FilePdf: Story<IconProps> = (props: IconProps) => <FilePdfIcon {...props} />
export const FilePicture: Story<IconProps> = (props: IconProps) => (
  <FilePictureIcon {...props} />
)
export const FileWPS: Story<IconProps> = (props: IconProps) => <FileWPSIcon {...props} />
export const FilePPT: Story<IconProps> = (props: IconProps) => <FilePPTIcon {...props} />
export const Pen: Story<IconProps> = (props: IconProps) => <PenIcon {...props} />
export const PreDouble: Story<IconProps> = (props: IconProps) => (
  <PreDoubleIcon {...props} />
)
export const NextDouble: Story<IconProps> = (props: IconProps) => (
  <NextDoubleIcon {...props} />
)
export const SorterDefault: Story<IconProps> = (props: IconProps) => (
  <SorterDefaultIcon {...props} />
)
export const SorterUp: Story<IconProps> = (props: IconProps) => <SorterUpIcon {...props} />
export const SorterDown: Story<IconProps> = (props: IconProps) => (
  <SorterDownIcon {...props} />
)

export const Filter: Story<IconProps> = (props: IconProps) => <FilterIcon {...props} />
export const Time: Story<IconProps> = (props: IconProps) => <TimeIcon {...props} />
export const Calendar: Story<IconProps> = (props: IconProps) => <CalendarIcon {...props} />

export const DragPoint: Story<IconProps> = (props: IconProps) => (
  <DragPointIcon {...props} />
)

export const Leaf: Story<IconProps> = (props: IconProps) => <LeafIcon {...props} />
export const Result403: Story<IconProps> = (props: IconProps) => (
  <Result403Icon {...props} />
)
export const Result404: Story<IconProps> = (props: IconProps) => (
  <Result404Icon {...props} />
)
export const Result500: Story<IconProps> = (props: IconProps) => (
  <Result500Icon {...props} />
)

export const EmptyState: Story<IconProps> = (props: IconProps) => (
  <EmptyStateIcon {...props} />
)
