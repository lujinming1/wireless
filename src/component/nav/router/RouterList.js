import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

import Home from '../../home/Home';


import Our from '../../book/Our';
import BookIndex from '../../book/BookIndex';
import BookOverview from '../../book/BookOverview';
import BookResource from '../../book/BookResource';


import EOur from '../../experiment/EOur';
import ExperimentConstruct from '../../experiment/ExperimentConstruct';
import ExperimentUser from '../../experiment/ExperimentUser';
import ExperimentMotive from '../../experiment/ExperimentMotive';
import ExperimentSuperiorit from '../../experiment/ExperimentSuperiorit';
import ExperimentItem from '../../experiment/ExperimentItem';
import ExperimentCase from '../../experiment/ExperimentCase';
import ExperimentPlan from '../../experiment/ExperimentPlan';
import ExperimentCommunity from '../../experiment/ExperimentCommunity';
import ExperimentBuy from '../../experiment/ExperimentBuy';

import Question from '../../question/Question';


class RouterList extends Component{


  render(){
    return(
      <div>
        <Route exact path="/" component={Home} />

        <Route path="/book/Our" component={Our} />
        <Route path="/book/BookIndex" component={BookIndex} />
        <Route path="/book/BookOverview" component={BookOverview} />
        <Route path="/book/BookResource" component={BookResource} />

        <Route path="/experiment/EOur" component={EOur} />
        <Route path="/experiment/ExperimentConstruct" component={ExperimentConstruct} />
        <Route path="/experiment/ExperimentUser" component={ExperimentUser} />
        <Route path="/experiment/ExperimentMotive" component={ExperimentMotive} />
        <Route path="/experiment/ExperimentSuperiorit" component={ExperimentSuperiorit} />
        <Route path="/experiment/ExperimentItem" component={ExperimentItem} />
        <Route path="/experiment/ExperimentCase" component={ExperimentCase} />
        <Route path="/experiment/ExperimentPlan" component={ExperimentPlan} />
        <Route path="/experiment/ExperimentCommunity" component={ExperimentCommunity} />
        <Route path="/experiment/ExperimentBuy" component={ExperimentBuy} />

        <Route path="/question" component={Question} />

      </div>
    );
  }
}

export default RouterList;
