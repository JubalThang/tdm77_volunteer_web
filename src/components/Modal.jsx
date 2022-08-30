export const Modal = ({setShowModal, checkedItems }) => {
    
    return(
        <div className="modal z-10 w-full h-full bg-orange-300">
            <h1>Books you picked</h1>
                <ol>
                    {
                        checkedItems.map((item,i) => item.isPickup && <li key={i}>{item.name}</li>)
                    }
                </ol>
                <button onClick={setShowModal} className="primary-btn">NO</button>
        </div>
    )

    // update books and create a new collection with user's selected books
} 