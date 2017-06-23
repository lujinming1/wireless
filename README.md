#无线网络技术课程网站    
##入口文件：src/index.js



import Home from './component/Home';


import BookIndex from './component/book/BookIndex';
import BookOverview from './component/book/BookOverview';
import BookResource from './component/book/BookResource';


import ExperimentIndex from './component/experiment/ExperimentIndex';
import ExperimentConstruct from './component/experiment/ExperimentConstruct';
import ExperimentUser from './component/experiment/ExperimentUser';
import ExperimentMotive from './component/experiment/ExperimentMotive';
import ExperimentSuperiorit from './component/experiment/ExperimentSuperiorit';
import ExperimentItem from './component/experiment/ExperimentItem';
import ExperimentCase from './component/experiment/ExperimentCase';
import ExperimentPlan from './component/experiment/ExperimentPlan';
import ExperimentCommunity from './component/experiment/ExperimentCommunity';
import ExperimentBuy from './component/experiment/ExperimentBuy';







        <Route exacat path="/book" component={BookIndex} />
        <Route path="bookOverview" component={BookOverview} />
        <Route path="bookResource" component={BookResource} />
      </Route>


        <Route exact path="/experiment" component={ExperimentIndex} />
        <Route path="experimentConstruct" component={ExperimentConstruct} />
        <Route path="experimentUser" component={ExperimentUser} />
        <Route path="experimentMotive" component={ExperimentMotive} />
        <Route path="experimentSuperiority" component={ExperimentSuperiorit} />
        <Route path="experimentItem" component={ExperimentItem} />
        <Route path="experimentCase" component={ExperimentCase} />
        <Route path="experimentPlan" component={ExperimentPlan} />
        <Route path="experimentCommunity" component={ExperimentCommunity} />
        <Route path="experimentBuy" component={ExperimentBuy} />
      </Route>
