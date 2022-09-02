export const Checkbox = ({ book, onChange, bookid }) => {
    return (
        <div className='flex items-center '>
            <input type='checkbox' id={bookid} className=' h-5 w-5 accent-primary' data-action={bookid} checked={book.isChosen ? true : book.isPickup ? true : false} onChange={onChange} disabled={book.isChosen} />
            <label htmlFor="checkbox" className={`px-2 font-medium text-primary whitespace-nowrap ${book.isChosen && 'text-gray-400 line-through'} capitalize`}> {book.name} </label>
        </div>
    )
}