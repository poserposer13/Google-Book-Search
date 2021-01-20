import { Button } from "react-bootstrap";


function SaveBtn(props) {
    return (
        <>
            <Button className="save-btn" {...props} role="button" tabIndex="0">
                Save
    </Button>
        </>
    )
};


export default SaveBtn;