import React from 'react';
import logo from './logo.svg';
import './App.css';

  function App() {
    return (
      <div>
         <h1>Form Pembelian Buah</h1>

         <div>
        <label>Nama Pelanggan</label>
    <input typeName="text"/>
    </div>
  

<input typeName="radio" name="buah"/>
<label>Semangka</label><br></br>
<input typeName="radio" name="buah"/>
<label>Jeruk</label><br></br>
<input typeName="radio" name="buah"/>
<label>Nanas</label><br></br>
<input typeName="radio" name="buah"/>
<label>Salak</label><br></br>
<input typeName="radio" name="buah"/>    
<label>Anggur</label><br></br>

<div>
<input typeName="submit" value="Kirim"/>
</div>

        </div>


  );
}


export default App;
