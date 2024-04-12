//统一配置Enzyme
import Enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
//configure enzyme
Enzyme.configure({adapter: new Adapter()});
export default Enzyme;
