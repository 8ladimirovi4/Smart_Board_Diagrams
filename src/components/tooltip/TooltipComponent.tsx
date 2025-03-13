import { TooltipProps } from "primereact/tooltip"
import { StyledTooltip } from "./styles"

const TooltipComponent = ({target, content, position='right', showDelay=300, hideDelay=300}:TooltipProps ) => {
  return (
    <StyledTooltip target={target} content={content} position={position} showDelay={showDelay} hideDelay={hideDelay}/>
  )
}

export default TooltipComponent