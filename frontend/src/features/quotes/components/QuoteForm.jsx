import React, { useState } from 'react';

const QuoteForm = ({ onCancel, onSubmit }) => {
  const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);
  
  const addItem = () => setItems([...items, { description: '', quantity: 1, price: 0 }]);
  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black text-gray-800">Nuevo Presupuesto</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Cliente</label>
          <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="Nombre del cliente" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Fecha</label>
          <input type="date" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">Items</h3>
          <button onClick={addItem} className="text-sm font-bold text-indigo-600 hover:text-indigo-800">+ Agregar Item</button>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-6">
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" 
                  placeholder="Descripción"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <input 
                  type="number" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" 
                  placeholder="Cant"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value))}
                />
              </div>
              <div className="col-span-3">
                <input 
                  type="number" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" 
                  placeholder="Precio"
                  value={item.price}
                  onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value))}
                />
              </div>
              <div className="col-span-1 pb-3 text-right">
                <button className="text-red-400 hover:text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-100">
        <div>
          <p className="text-sm text-gray-500 font-medium">Total Estimado</p>
          <p className="text-3xl font-black text-indigo-600">${total.toLocaleString()}</p>
        </div>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors">Guardar Borrador</button>
          <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">Generar Presupuesto</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
