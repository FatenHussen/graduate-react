import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsSearch, BsGrid3X2GapFill, BsList, BsFunnel } from "react-icons/bs";
import SideBar from '../Components/Sidebar'
import Delete from '../Models/Delete';
import AddProduct from '../Models/Products/AddProduct';
import Table from '../Components/Products/Table';
import Card from '../Components/Products/Card';
import img from '../Assets/modern-beauty-products-different-recipients-assortment.jpg'
import Filter from '../Models/Products/Filter';

const Products = () => {
    const [view, setView] = useState(false) 
    const [delet, setDelet] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState({
      "products": [
        {
          "id": "PHAR-001",
          "name": "Paracetamol 500mg Tablets",
          "category": "Pain Relief",
          "description": "Fast-acting pain reliever and fever reducer, 100 tablets per bottle",
          "price": 12.99,
          "stock": 85,
          "supplier": "MediCare Suppliers",
          "sku": "PC-500-100T",
          "status": "active",
          "expiryDate": "2025-08-31",
          "rate": 4
        },
        {
          "id": "PHAR-002",
          "name": "Amoxicillin 500mg Capsules",
          "category": "Antibiotics",
          "description": "Broad-spectrum penicillin antibiotic, 50 capsules per pack",
          "price": 18.50,
          "stock": 42,
          "supplier": "PharmaPlus Inc",
          "sku": "AMOX-500-50C",
          "status": "active",
          "expiryDate": "2024-11-30",
          "rate": 4
        },
        {
          "id": "PHAR-003",
          "name": "Insulin Pen Needles",
          "category": "Diabetic Care",
          "description": "Sterile disposable needles for insulin pens, 100 needles per box",
          "price": 9.99,
          "stock": 150,
          "supplier": "Diabeticare Ltd",
          "sku": "IN-NEEDLE-100",
          "status": "active",
          "expiryDate": "2026-03-31",
          "rate": 4
        },
        {
          "id": "PHAR-004",
          "name": "Alcohol Swabs (100pk)",
          "category": "First Aid",
          "description": "Sterile alcohol prep pads, 70% isopropyl alcohol",
          "price": 4.99,
          "stock": 220,
          "supplier": "MediClean Corp",
          "sku": "ALC-SWAB-100",
          "status": "active",
          "expiryDate": "2025-12-31",
          "rate": 4
        },
        {
          "id": "PHAR-005",
          "name": "Digital Thermometer",
          "category": "Medical Equipment",
          "description": "Instant-read oral/axillary thermometer with LCD display",
          "price": 24.95,
          "stock": 35,
          "supplier": "HealthTech Ltd",
          "sku": "THERM-DG-01",
          "status": "low-stock",
          "expiryDate": "2027-01-31",
          "rate": 4
        },
        {
          "id": "PHAR-006",
          "name": "Elastic Bandage 3\"",
          "category": "First Aid",
          "description": "Self-adhesive compression bandage, 3 inches wide",
          "price": 6.75,
          "stock": 90,
          "supplier": "FirstAid Direct",
          "sku": "BAND-EL-3IN",
          "status": "active",
          "expiryDate": "2026-06-30",
          "rate": 5
        },
        {
          "id": "PHAR-007",
          "name": "Vitamin D3 2000IU",
          "category": "Supplements",
          "description": "High potency vitamin D3 softgels, 120 count",
          "price": 15.99,
          "stock": 60,
          "supplier": "NutraHealth",
          "sku": "VIT-D3-2K",
          "status": "active",
          "expiryDate": "2025-09-30",
          "rate": 4.5
        },
        {
          "id": "PHAR-008",
          "name": "N95 Respirator Mask",
          "category": "PPE",
          "description": "NIOSH-approved N95 particulate respirator, 20 masks per box",
          "price": 29.99,
          "stock": 120,
          "supplier": "SafeGear Medical",
          "sku": "MASK-N95-20",
          "status": "active",
          "expiryDate": "2026-05-31",
          "rate": 3.5
        },
        {
          "id": "PHAR-009",
          "name": "Hand Sanitizer Gel",
          "category": "Hygiene",
          "description": "Alcohol-based sanitizing gel, 500ml pump bottle",
          "price": 7.49,
          "stock": 75,
          "supplier": "CleanHands Inc",
          "sku": "SANIT-500ML",
          "status": "active",
          "expiryDate": "2025-07-31",
          "rate": 2.5
        },
        {
          "id": "PHAR-010",
          "name": "Blood Pressure Monitor",
          "category": "Medical Equipment",
          "description": "Automatic upper arm blood pressure cuff with digital display",
          "price": 49.95,
          "stock": 25,
          "supplier": "CardioCheck",
          "sku": "BP-MONITOR-A1",
          "status": "low-stock",
          "expiryDate": "2027-03-31",
          "rate": 3
        }
      ]
    }
        );

        const handleSave = (productData) => {
          if (modalMode === 'add') {
            setProducts(prev => ({
              products: [...prev.products, productData]
            }));
          } else {
            setProducts(prev => ({
              products: prev.products.map(p => p.id === productData.id ? productData : p)
            }));
          }
          setModalMode(null);
        };

        const filteredProducts = products.products.filter(product => {
          const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
          const matchesRating = product.rate >= selectedRating;
          const matchesCategory = selectedCategories.length === 0 || 
            selectedCategories.includes(product.category);
          
          return matchesPrice && matchesRating && matchesCategory;
        });

        const handleDelete = () => {
          setProducts(prev => ({
            products: prev.products.filter(p => p.id !== selectedProduct.id)
          }));
          setDelet(false);
          setModalMode(null);
        };

        const hasFilters = 
  priceRange[0] !== 0 || 
  priceRange[1] !== 100 || 
  selectedRating > 0 || 
  selectedCategories.length > 0;

    return (
      
      <div className='w-full h-fit flex justify-between items-center flex-col md:flex-row'>
          <SideBar/>
          <div className='w-[95%] min-h-screen h-fit flex justify-evenly items-center flex-col my-5 md:my-0'>
              <h1 className='w-[90%] pb-2 border-b-2 border-[#0693be] text-[#0693be] text-4xl font-semibold mb-3 md:mb-0'>Products</h1>
              <div className='w-[90%] h-32 flex justify-between md:items-center items-start flex-col md:flex-row gap-3 md:gap-0 mb-16 md:mb-0'>
                  <div className={`w-[100%] md:w-[50%] ${hasFilters ? 'lg:w-[40%]' : 'lg:w-[30%]' }  h-14 flex md:justify-evenly md:items-center items-start`}>
                    <input type='text' placeholder='Search...' className='w-[50%] md:w-72 h-12 outline-none px-2 rounded-xl border-2 border-[#0693be]'/>
                      <button className='w-12 h-12  bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'>
                          <BsSearch size={20}/>
                      </button>
                      <button 
      className='relative w-12 h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'
      onClick={() => setShowFilters(true)}
    >
      <BsFunnel  size={20}/>
      {hasFilters && (
    <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
  )}  
    </button>
    {hasFilters && (
    <button className='p-2 border-2 border-[#0693be] hover:border-[#0693be90] text-[#0693be] hover:text-[#0693be90] rounded-xl transition ease-in-out delay-50'
    onClick={()=>{setPriceRange([0,100]); setSelectedCategories([]); setSelectedRating(0)}}
    >Clear Filter</button>
  )}
                  </div>
                  <div className='w-96 h-28 flex justify-evenly md:items-end items-start flex-col gap-3 md:gap-0'>
                    <div className='w-[100%] h-12 flex justify-evenly items-center'>
                  <button className='w-[35%] h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white text-lg rounded-xl' onClick={() => setModalMode('add')}>Add product</button>
                  <Link to={'/inventory'} className='w-[60%] h-12 text-[#0693be] hover:text-[#0693be] bg-transparent hover:bg-[#edf3f6] border-2 border-[#0693be] hover:border-[#0693be] transition ease-in-out delay-50 text-lg rounded-xl flex justify-center items-center'>Add Restock request</Link>
                  </div>
                  <div className='w-24 h-12 border-2 border-[#0693be5c] rounded-full md:flex items-center hidden'>
         <div className={`${!view ? 'bg-[#0693be] text-white' : 'bg-transparent'} w-14 h-12 flex justify-center items-center rounded-full cursor-pointer`} onClick={()=>setView(false)}>
         <BsGrid3X2GapFill/>
         </div>
         <div className={`${view ? 'bg-[#0693be] text-white ' : 'bg-transparent'} w-14 h-12 flex justify-center items-center rounded-full cursor-pointer`} onClick={()=>setView(true)}>
        <BsList/>
         </div>
      </div>
                  </div>
              </div>
              <div className='w-[90%] min-h-[500px] h-fit mb-3'>
             {view ? <Table products={filteredProducts} setModalMode={setModalMode} setDelet={setDelet} setSelectedProduct={setSelectedProduct}/> : 
             <div className='w-full h-fit grid lg:grid-cols-4 md:grid-cols-2 place-items-center'>
             {/* {products.products.sort((a, b) => b.id - a.id).map((employee) => (
                <Card product={employee} setDelet={setDelet} setModalMode={setModalMode} setSelectedProduct={setSelectedProduct} imageUrl={img}/>
                    ))} */}
                    {filteredProducts.sort((a, b) => b.id - a.id).map((employee) => (
    <Card 
      product={employee} 
      setDelet={setDelet} 
      setModalMode={setModalMode} 
      setSelectedProduct={setSelectedProduct} 
      imageUrl={img}
    />))}
                    </div>}
              </div>
          </div>
          <AddProduct 
        mode={modalMode}
        product={selectedProduct}
        onClose={() => {
          setModalMode(null);
          setSelectedProduct(null);
        }}
        onSave={handleSave}
        visible={modalMode}
        setDelet={setDelet}
      />
      <Delete 
        onClose={() => setDelet(false)} 
        visible={delet} 
        onConfirm={handleDelete}
      />
      <Filter
    visible={showFilters}
    onClose={() => setShowFilters(false)}
    priceRange={priceRange}
    setPriceRange={setPriceRange}
    selectedRating={selectedRating}
    setSelectedRating={setSelectedRating}
    categories={categories}
    selectedCategories={selectedCategories}
    setSelectedCategories={setSelectedCategories}
  />
      </div>
    )
}

export default Products