import { useRef, useContext } from 'react';
import JoditEditor from 'jodit-react';
import { Functions } from '../../../Dashboard/Layout/Provider/FunctionProvider';

const TextEditor = () => {
    const {content, handleContentChange } = useContext(Functions);
    const editor = useRef(null);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={newContent => handleContentChange(newContent)}
            onChange={newContent => handleContentChange(newContent)}
        />
    );
};


export default TextEditor;