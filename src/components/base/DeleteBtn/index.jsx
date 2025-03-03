import Swal from 'sweetalert2';
import { FiDelete } from 'react-icons/fi';

const DeleteBtn = ({ handleRemove, className, children, describe, confirmTitle, confirmSubtitle }) => {

    const deletBtnHanle = () => Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: describe ? describe : 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            handleRemove()
            Swal.fire(
                confirmTitle? confirmTitle :'Deleted!',
                confirmSubtitle? confirmSubtitle : 'Your file has been deleted.',
                'success'
            )
        }
    })

    return (
        <button
            onClick={deletBtnHanle}
            type="button"
            className={`btn border-none  bg-red-600 hover:bg-red-900 text-white rounded-sm ${className} z-10`}>
            {children} <FiDelete />
        </button>
    );
};

export default DeleteBtn;