import {Componenet} from "react";
import {Button, Form, Header, Input, Label} from "./Searchbar.styled";

export default class Searchbar extends Componenet {
    
    state = {
        query: '',
    };

    onChange = event => {
        this.setState({query: event.currentTarget.value});
    };

    onSubmit = event => {
        event.preventDefault();
        const {onSubmit} = this.props;
        const {query} = this.state;
        
        if(!query.trim()) {
            return (
                "Please, enter some data"
            );
        }
    }

    resetForm = () => {
        this.setState({
            query: '' 
        });
    }


    render () {

        const {query} = this.state;
        return (
            <Header>
                <Form onSubmit={this.onSubmit}>
                    <Button type="submit" style={{marginRight: '18px'}}>
                        <Label>
                            Search
                        </Label>
                    </Button>
                    
                    <Input 
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value="query"
                    placeholder="Search images and photos"
                    onChange={this.onChange}
                    />
                </Form>
            </Header>
        );
    }
}

