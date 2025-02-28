// import React, { useState, useEffect } from 'react';
// import { 
//   BsX, 
//   BsPencil, 
//   BsPlus, 
//   BsCheckCircle,
//   BsCapsule,
//   BsArchive,
//   BsTrash
// } from 'react-icons/bs';


// const AddProduct = ({ mode, product, onClose, onSave, visible, setDelet }) => {
//   const [isEditing, setIsEditing] = useState(mode === 'add');
//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     description: '',
//     price: '',
//     stock: '',
//     supplier: '', 
//     img: [],
//     status: 'active'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'price' || name === 'stock' ? Number(value) : value
//     }));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//     onClose();
//   };

//   const toggleEdit = () => setIsEditing(!isEditing);

//   // const getHeaderIcon = () => {
//   //   switch(mode) {
//   //     case 'view': return <BsClipboardCheck className="text-blue-500 text-xl" />;
//   //     case 'edit': return <BsPencil className="text-yellow-500 text-xl" />;
//   //     case 'add': return <BsPlus className="text-green-500 text-xl" />;
//   //     default: return <BsCapsule className="text-gray-500 text-xl" />;
//   //   }
//   // };

//     useEffect(() => {
//         // When the modal is opened, prevent scrolling in the background
//         if(visible != null){
//         document.body.style.overflow = 'hidden';
//         }
//         // When the modal is closed, allow scrolling in the background
//         return () => { 
//           document.body.style.overflow = 'visible';
//         };
//       }, [visible]);

//       useEffect(() => {
//         if (mode === 'add') {
//           setFormData({
//             id: `PHAR-${Date.now()}`,
//             name: '',
//             category: '',
//             description: '',
//             price: '',
//             stock: '',
//             supplier: '',
//             sku: '',
//             expiry: '',
//             status: 'active'
//           });
//         } else if (product) {
//           setFormData(product);
//         }
//       }, [mode, product]);
    

//   if(visible == null) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//     <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl">
//       {/* Modal header */}
//       <div className="flex justify-between items-center p-6 border-b">
//         <h2 className="text-2xl font-semibold">
//           {mode === 'add' ? 'Add New Product' : formData.name}
//         </h2>
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//           <BsX className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Modal form */}
//       <form onSubmit={handleSubmit} className="p-6 space-y-6">
//         {/* Form fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Column */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Product Name</label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
//                 required
//                 disabled={mode === 'view'}
//                 className="w-full p-2 border rounded-md disabled:bg-gray-100"
//               />
//             </div>
//             {/* Add other fields similarly */}
//           </div>

//           {/* Right Column */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Price ($)</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={(e) => setFormData(prev => ({...prev, price: Number(e.target.value)}))}
//                 required
//                 min="0"
//                 step="0.01"
//                 disabled={mode === 'view'}
//                 className="w-full p-2 border rounded-md disabled:bg-gray-100"
//               />
//             </div>
//             {/* Add other fields similarly */}
//           </div>
//         </div>

//         {/* Action buttons */}
//         <div className="flex justify-end gap-3 pt-6 border-t">
//           {mode === 'edit' && (
//             <button
//               type="button"
//               onClick={()=>{setDelet(true)}}
//               className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//             >
//               <BsTrash className="inline mr-2" />
//               Delete Product
//             </button>
//           )}
          
//           {mode !== 'view' && (
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               {mode === 'add' ? 'Add Product' : 'Save Changes'}
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default AddProduct

import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { 
  BsX, 
  BsPencil, 
  BsPlus, 
  BsCheckCircle,
  BsCapsule,
  BsArchive,
  BsTrash,
  BsImage
} from 'react-icons/bs';

const AddProduct = ({ mode, product, onClose, onSave, visible, setDelet }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    supplier: '', 
    img: [],
    status: 'active'
  });

  const [filePreviews, setFilePreviews] = useState([]);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      alert('Please upload only images (max 5 files, 2MB each)');
      return;
    }

    if (acceptedFiles.length + filePreviews.length > 5) {
      alert('Maximum 5 images allowed');
      return;
    }

    const oversizedFiles = acceptedFiles.filter(file => file.size > 2 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      alert('File size must be less than 2MB');
      return;
    }

    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setFiles(prev => [...prev, ...newFiles]);
    setFilePreviews(prev => [...prev, ...newFiles.map(f => f.preview)]);
  }, [filePreviews]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 5,
    disabled: mode === 'view'
  });

  const removeImage = (index) => {
    const newFiles = [...files];
    const removed = newFiles.splice(index, 1);
    URL.revokeObjectURL(removed[0].preview);
    setFiles(newFiles);
    setFilePreviews(newFiles.map(f => f.preview));
  };

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithFiles = {
      ...formData,
      img: files.map(f => f.file)
    };
    onSave(formDataWithFiles);
    onClose();
  };

  useEffect(() => {
    if(visible != null){
      document.body.style.overflow = 'hidden';
    }
    return () => { 
      document.body.style.overflow = 'visible';
    };
  }, [visible]);

  useEffect(() => {
    if (mode === 'add') {
      setFormData({
        id: `PHAR-${Date.now()}`,
        name: '',
        category: '',
        description: '',
        price: '',
        stock: '',
        supplier: '',
        sku: '',
        expiry: '',
        status: 'active'
      });
      setFiles([]);
      setFilePreviews([]);
    } else if (product) {
      setFormData(product);
      setFilePreviews(product.img || []);
    }
  }, [mode, product]);

  if(visible == null) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl h-[97%]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">
            {mode === 'add' ? 'Add New Product' : formData.name}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <BsX className="w-6 h-6" />
          </button>
        </div>
        <div className='h-[89%] overflow-y-scroll scrollbar-thin scrollbar-track-[#e2eaed] scrollbar-thumb-[#0693be]'>
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <div>
                <label className="block text-sm font-medium mb-2">Product Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={mode === 'view'}
                  className="w-full p-2 border rounded-md disabled:bg-gray-100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                {/* <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  disabled={mode === 'view'}
                  className="w-full p-2 border rounded-md disabled:bg-gray-100"
                /> */}
                <select
        name="supplier"
        required
        className="w-full px-4 py-2 border rounded-lg outline-none focus:border-2 focus:border-black"
        value={formData.supplier}
        onChange={handleChange}
      >
        <option value="">Choose a catagory</option>
        {/* Add optional chaining */}
        {product?.suppliers?.map((supplier) => (
          <option key={supplier} value={supplier}>
            {supplier}
          </option>
        ))}
      </select>
              </div>

              
            </div>

            <div className="space-y-1">
              <div className='flex justify-between items-center'> 
              <div className='w-[48%]'>
                <label className="block text-sm font-medium mb-2">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  disabled={mode === 'view'}
                  className="w-full p-2 border rounded-md disabled:bg-gray-100"
                />
              </div>

              <div className='w-[48%]'>
                <label className="block text-sm font-medium mb-2">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                  disabled={mode === 'view'}
                  className="w-full p-2 border rounded-md disabled:bg-gray-100"
                />
              </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Supplier</label>
                <select
        name="supplier"
        required
        className="w-full px-4 py-2 border rounded-lg outline-none focus:border-2 focus:border-black"
        value={formData.supplier}
        onChange={handleChange}
      >
        <option value="">Choose a supplier</option>
        {/* Add optional chaining */}
        {product?.suppliers?.map((supplier) => (
          <option key={supplier} value={supplier}>
            {supplier}
          </option>
        ))}
      </select>
              </div>
            </div>
            
          </div>
          <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  disabled={mode === 'view'}
                  maxLength={250}
                  className="w-full p-2 border rounded-md disabled:bg-gray-100 h-32 resize-none"
                />
              </div>

          {/* Image Upload Section */}
          <div className="col-span-full">
            <label className="block text-sm font-medium mb-2">Product Images</label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                ${mode === 'view' ? 'cursor-not-allowed bg-gray-100' : ''}`}
            >
              <input {...getInputProps()} />
              <div className="space-y-2">
                <BsImage className="w-8 h-8 mx-auto text-gray-400" />
                {isDragActive ? (
                  <p className="text-blue-500">Drop images here</p>
                ) : (
                  <p className="text-gray-500">
                    Drag & drop images here, or click to select (max 5, 2MB each)
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 mt-4">
              {filePreviews.map((preview, index) => (
                <div key={preview} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  {mode !== 'view' && (
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 
                               opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <BsX className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t">
            {mode === 'edit' && (
              <button
                type="button"
                onClick={() => { setDelet(true) }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                <BsTrash className="inline mr-2" />
                Delete Product
              </button>
            )}
            
            {mode !== 'view' && (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {mode === 'add' ? 'Add Product' : 'Save Changes'}
              </button>
            )}
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;