import {useState} from "react";
import {Button, Form, Header, Input, Label} from "./Searchbar.styled";
import {GoCodescanCheckmark} from "react-icons/go";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Searchbar({onSubmit}) {
    
    const [query, setQuery] = useState('');

    const onChange = event => {
        setQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() === '') {
            return toast.info(
             'Please, enter some data!',
              { className: 'toast-message', autoClose: 2000 }
            );
        }
    
    onSubmit(query);
    setQuery('');

    }

        return (
            <Header>
                <Form onSubmit={handleSubmit}>
                    <Button type="submit" style={{marginRight: '18px'}}>
                        <Label>
                        <GoCodescanCheckmark style={{ fontSize: '22px' }} />
                            Search
                        </Label>
                    </Button>
                    
                    <Input 
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={query}
                    placeholder="Search images and photos"
                    onChange={onChange}
                    />
                </Form>
            </Header>
        );
}

