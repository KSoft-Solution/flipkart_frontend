import { bindActionCreators } from "redux";

const rootAction = (dispatch) =>
  useMemo(() => bindActionCreators({

  }, dispatch), [dispatch]);
  
export default rootAction;
