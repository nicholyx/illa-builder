import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { LabelPlacement, StepSize, StepStyleConfig } from "../interface"

export function applyConnectionNodeStyle({
  size,
  type,
  direction,
  labelPlacement,
}: StepStyleConfig): SerializedStyles {
  let color = globalColor(`--${illaPrefix}-gray-08`)

  if (type === "dot") {
    return generateDotConnnector({ direction, size, color })
  } else if (type === "line") {
    return generateLineConnector({ direction, labelPlacement, size, color })
  }

  return css``
}

function generateDotConnnector({
  direction,
  size,
  color,
}: {
  direction: LabelPlacement
  size: StepSize
  color: string
}): SerializedStyles {
  if (direction === "vertical") {
    const positionMap = {
      small: {
        left: 3.5,
        top: 22,
        bottom: -5,
      },
      large: {
        left: 4.5,
        top: 24,
        bottom: -8,
      },
    }
    return css({
      position: "absolute",
      display: "block",
      width: 1,
      ...positionMap[size],
      backgroundColor: color,
    })
  } else if (direction === "horizontal") {
    const topMap = {
      small: 4,
      large: 4.5,
    }
    return css({
      position: "absolute",
      display: "block",
      height: 1,
      width: "100%",
      left: 78,
      top: topMap[size],
      backgroundColor: color,
    })
  }

  return css``
}

function generateLineConnector({
  direction,
  labelPlacement,
  size,
  color,
}: {
  direction: LabelPlacement
  labelPlacement: LabelPlacement
  size: StepSize
  color: string
}): SerializedStyles {
  if (direction === "vertical") {
    const positionMap = {
      small: {
        left: 12,
        top: 28,
        bottom: 5,
      },
      large: {
        left: 16,
        top: 36,
        bottom: 5,
      },
    }
    return css({
      position: "absolute",
      display: "block",
      width: 1,
      ...positionMap[size],
      backgroundColor: color,
    })
  } else if (labelPlacement === "vertical") {
    const positionMap = {
      small: {
        top: 12,
        left: 88,
        paddingRight: 24,
      },
      large: {
        top: 16,
        left: 100,
        paddingRight: 40,
      },
    }

    return css(
      {
        position: "absolute",
        display: "block",
        height: 1,
        width: "100%",
        boxSizing: "border-box",
        ...positionMap[size],
      },
      css`
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background-color: ${color};
        }
      `,
    )
  }

  return css``
}
