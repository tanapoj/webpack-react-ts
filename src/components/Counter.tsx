import * as React from "react";
import {connect} from "react-redux"
import {IState} from "../store/reducer"

export interface OwnProps {
    propFromParent: number
}

interface StateProps {
    propFromReduxStore: string
}

interface DispatchProps {
    onSomeEvent: () => void
}

type Props = StateProps & DispatchProps & OwnProps

interface State {
    internalComponentStateField: string
}

class MyComponent extends React.Component<Props, State> {
    render() {
        return (
            <div onClick={this.props.onSomeEvent}>
                {this.props.propFromParent}
                {this.props.propFromReduxStore}
            </div>
        )
    }
}

const mapStateToProps = (state: IState, ownProps: OwnProps): StateProps => {
    return {
        propFromReduxStore: ""
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps): DispatchProps => {
    return {
        onSomeEvent: () => dispatch({type: "TEST"})
    }
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(MyComponent)