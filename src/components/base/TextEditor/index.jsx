import { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({handleChange, content}) => {
    const editor = useRef(null);
    return (
        <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={newContent => handleChange(newContent)}
            onChange={newContent => handleChange(newContent)}
        />
    );
};


export default TextEditor;