import React , {useState} from 'react'

const ShipperCreateAd = () => {
    const baseUrl = 'https://uship.onrender.com';
    const [formData, setFormData] = useState({
        title : '',
        shipmentName : '',
        shipmentType : '',
        description : '',
        price : '',
        quantity : '',
        pymentMethod : '',
        width : '',
        height :'',
        length : '',
        pickupAddress : '',
        deliveryAddress : '',
        pickupDate : '',
        deliveryDate : '',
        image:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
    
        // Append each field to the FormData object
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });
    
        try {
          const response = await fetch(`${baseUrl}/shippers/ads`, formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          console.log('ad created successful:', response.data);
          // Handle success, e.g., redirect or show a success message
        } catch (error) {
          console.error('failed:', error.message);
          // Handle error, e.g., show an error message to the user
        }
      };

  return (
    <div className="contaier">
        <h2>You can create an ad</h2>
        <form method='POST' onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" name='title' value={formData.title} onChange={handleChange} />
            </label><br></br>
            <label>
                Shippment Name
                <input type="text" name='shipmentName' value={formData.shipmentName} onChange={handleChange} />
            </label><br></br>
            <label>
                Shipment Type 
                <input type="text" name='shipmentType' value={formData.shipmentType} onChange={handleChange}/>
            </label><br></br>
            <label>
                Description
                <input type="text" name='description' value={formData.description} onChange={handleChange} />
            </label><br></br>
            <label>
                Price
                <input type="text" name='price' value={formData.price} onChange={handleChange} />
            </label><br></br>
            <label>
                Quantity
                <input type="text" name='quantity' value={formData.quantity} onChange={handleChange} />
            </label><br></br>
            <label>
                Payment Method
                <input type="text" name='pymentMethod' value={formData.pymentMethod} onChange={handleChange} />
            </label><br></br>
            <label>
                Width
                <input type="text" name='width' value={formData.width} onChange={handleChange} />
            </label><br></br>
            <label>
                Height
                <input type="text" name='height' value={formData.height} onChange={handleChange} />
            </label><br></br>
            <label>
                Pickup address
                <input type="text" name='pickupAddress' value={formData.pickupAddress} onChange={handleChange} />
            </label><br></br>
            <label>
                Delivery Address
                <input type="text" name='deliveryAddress' value={formData.deliveryAddress} onChange={handleChange}/>
            </label><br></br>
            <label>
                Pickup Date
                <input type="date" name='pickupDate' value={formData.pickupDate} onChange={handleChange}/>
            </label><br></br>
            <label>
                Delievry Date
                <input type="date" name='deliveryDate' value={formData.deliveryDate} onChange={handleChange} />
            </label><br></br>
            <label>
                Image
                <input type="file" name='image' value={formData.image} onChange={handleChange} accept="image/*" />
            </label><br></br>
            <button type="submit">Publish your ad</button>

        </form>
    </div>
  )
}

export default ShipperCreateAd
