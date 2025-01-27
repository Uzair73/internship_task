import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import Button from './Button'

const Modal_2 = ({ addList, onClose }) => {
  const [listTitle, setListTitle] = useState('')
  const [itemName, setItemName] = useState('')
  const [items, setItems] = useState([])

  const add_item = () => {
    if (itemName.trim()) {
      setItems(prevItems => [...prevItems, { name: itemName.trim(), isChecked: false }])
      setItemName('')
    }
  }
  const remove_item = index => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index))
  }
  const submit_form = e => {
    e.preventDefault()
    if (listTitle.trim() && items.length > 0) {
      addList({ title: listTitle.trim(), items })
      setListTitle('')
      setItems([])
      onClose()
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg z-10 max-w-md mx-auto w-[30vw]">
      <div className="flex justify-between items-center text-start">
        <h3 className="text-lg font-semibold text-gray-900">Add New List</h3>
        <ImCross className="text-gray-600 text-sm cursor-pointer" onClick={onClose} />
      </div>
      <form onSubmit={submit_form} className="mt-4 text-start">
        <label htmlFor="listTitle" className="block text-sm font-medium text-gray-700 mb-1">
          List Title
        </label>
        <input
          type="text"
          id="listTitle"
          name="listTitle"
          value={listTitle}
          onChange={e => setListTitle(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#047857] focus:border-[#047857] block w-full p-2.5 mb-4"
          placeholder="Enter list title"
          required
        />
        <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
          Add Items
        </label>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#047857] focus:border-[#047857] block w-full p-2.5"
            placeholder="Item name"
          />
          <Button
            type="button"
            onClick={add_item}
            classname="text-white bg-[#059669] hover:bg-[#047857] font-medium rounded-lg text-sm px-4 py-2"
            btn_text={"+"}
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-lg mb-4 h-28 overflow-y-auto">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="mb-2 flex justify-between items-center text-gray-800 text-lg bg-white border border-gray-200 shadow-2xl px-3 rounded-md"
              >
                {item.name}
                <Button
                  onClick={() => remove_item(index)}
                  classname="text-gray-600 hover:text-red-600 cursor-pointer"
                  btn_text={"X"}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No items added yet</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!listTitle || items.length === 0}
          className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 ${
            listTitle && items.length > 0
              ? "bg-[#059669] hover:bg-[#047857] cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Create List
        </button>
      </form>
    </div>
  )
}

export default Modal_2
