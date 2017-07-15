import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/experimentsActions';

class Experiments extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.actions.getExperiments();
    }

    render() {
        const { experiments } = this.props;
        return (
            <div className="row">
                <div className="col-md-2 filters">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        LOB
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Air</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Car</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Cruise</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Hotel</label>
                                    </div>
                                   <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Insurance</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>LX</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Package</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Rail</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#panel-status" aria-expanded="false" aria-controls="panel-status">
                                        Status
                                    </a>
                                </h4>
                            </div>
                            <div id="panel-status" className="panel-collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Running</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Completed</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" value=""/>Closed</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a data-toggle="tab" href="#pane-test">Test</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#pane-throttle">Throttle</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="pane-test" className="tab-pane fade in active">
                            <table className="table table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>LOB</th>
                                        <th>Instance</th>
                                        <th>Start date</th>
                                        <th>End date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        experiments && experiments.data.map((item, eindex) => {
                                            return (
                                                <tr key={eindex}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.lob}</td>
                                                    <td>
                                                        {
                                                            item.instances.map((instance, iindex) => {
                                                                return (
                                                                    <p key={iindex}>{instance.name}</p>
                                                                );
                                                            })
                                                        }
                                                    </td>
                                                    <td>01/01/2017</td>
                                                    <td>01/01/2018</td>
                                               </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Experiments.propTypes = {
    actions: PropTypes.object.isRequired,
    experiments: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { experiments, isLoading, error  } = state;
    return {
        experiments,
        isLoading,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Experiments);
