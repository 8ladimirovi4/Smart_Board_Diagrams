import AnnotationNode from '../CustomNodes/AnnotationNode';
import ToolbarNode from '../CustomNodes/ToolbarNode';
import ResizerNode from '../CustomNodes/ResizerNode';
import CircleNode from '../CustomNodes/CircleNode';
import TextNode from '../CustomNodes/TextNode';
import TextUpdaterNode from 'pages/scheme5/CustomNodes/TextUpdaterNode'; // кастомный узел текст
import SvgNode from 'pages/scheme5/CustomNodes/SvgNode'; // кастомный узел svg
import ImageNode from 'pages/scheme5/CustomNodes/ImageNode'; // кастомный узел c картинкой
import handleUrlSubmit from 'pages/scheme5/CustomNodes/urlNode'; // кастомный узел с сайтом
import ProgressNode from '../CustomNodes/ProgressNode'
import ZoomNode from '../CustomNodes/ZoomNode';
import { CustomTooltipNode } from '../CustomNodes/CustomTooltipNode';
import DropdownNode from '../CustomNodes/DropDownNode';
import TableNode from '../CustomNodes/TableNode';
import UserSvgNode from '../CustomNodes/UserSvgNode';
import TreeNode from '../CustomNodes/TreeNode/TreeNode';
import RotatableNode from '../CustomNodes/RotatableNode';
import GraphNode from '../CustomNodes/GraphNode/GraphNode';


export const nodeTypes = {
      annotation: AnnotationNode,
      tools: ToolbarNode,
      resizer: ResizerNode,
      circle: CircleNode,
      textinput: TextNode,
      zoom: ZoomNode,
      textNode: TextUpdaterNode,
      svgNode: SvgNode,
      imageNode: ImageNode,
      websiteNode: handleUrlSubmit,
      customTooltip: CustomTooltipNode,
      progressNode: ProgressNode,
      dropdownNode: DropdownNode,
      tableNode: TableNode,
      userSvgNode: UserSvgNode,
      treeNode: TreeNode,
      rotatableNode: RotatableNode,
      graphNode: GraphNode
}