import React from 'react';

class Flashcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
        };
    }

    handleClick() {
        let flag = !this.state.flipped;
        this.setState({flipped: flag});
    }

    render() {
        return (
            <div class="FlashcardWrapper">
                <div class="Spacer"></div>
                <div class="Flashcard" onClick={() => this.handleClick()}>
                    <p>{this.state.flipped ? this.props.answer : this.props.hint}</p>
                </div>
                <div class="Spacer"></div>
            </div>
        );
    }
}

export default Flashcard;
