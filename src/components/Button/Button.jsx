import PropTypes from "prop-types";
import { LoadMore } from "./Button.styled";
import {GoIssueReopened} from "react-icons/go"
export default function Button({ onLoadMore}) {
    return(
        <div style={{margin: '0 auto'}}>
            <LoadMore type="button" onClick={onLoadMore}>
            <GoIssueReopened style={{ fontSize: '22px' }} />
               Load more
            </LoadMore>
        </div>
    );
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};