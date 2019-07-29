import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from './commons'
import * as actions from '../actions'

class ListItem extends Component {
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
        
        LayoutAnimation.spring();
    }
    renderDescription() {
        const {library, expanded} =this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const {title, id} = this.props.library.item;
        const { titleStyle, descriptionStyle } = styles;

        // const { id} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }, 
    descriptionStyle:{
        paddingLeft: 10,
        paddingRight: 10,
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded };
}
export default connect(mapStateToProps, actions)(ListItem);