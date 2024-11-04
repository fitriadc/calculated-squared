import React, { useState } from 'react';

function Index() {
  const [sisiPersegi, setSisiPersegi] = useState('');
  const [hasilPersegi, setHasilPersegi] = useState('');
  const [sisiKubus, setSisiKubus] = useState('');
  const [hasilKubus, setHasilKubus] = useState('');

  const hitungLuasPersegi = async () => {
    try {
      const response = await fetch('http://23.23.13.38:8080/function/luas-persegi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rusuk: parseFloat(sisiPersegi) }),
      });

      const data = await response.json();
      setHasilPersegi(`Luas Persegi: ${data.luas}`);
    } catch (error) {
      console.error('Error calculating area of the square:', error);
    }
  };

  const hitungLuasKubus = async () => {
    try {
      const response = await fetch('http://54.175.180.134:8080/function/luas-permukaan-kubus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rusuk: parseFloat(sisiKubus) }),
      });

      const data = await response.json();
      setHasilKubus(`Luas Permukaan Kubus: ${data.luasPermukaanKubus}`);
    } catch (error) {
      console.error('Error calculating surface area of the cube:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Aplikasi Perhitungan</h1>
        <p className="lead">Made by: Joselin Permata Aprillia & Fitria Dwi Cahya</p>
      </div>

      <section className="card p-4 mb-4">
        <h2 className="card-title">Luas Persegi</h2>
        <div className="form-group">
          <label htmlFor="sisiPersegi">Masukkan panjang sisi:</label>
          <input
            type="number"
            id="sisiPersegi"
            className="form-control"
            placeholder="Masukkan panjang sisi"
            value={sisiPersegi}
            onChange={(e) => setSisiPersegi(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={hitungLuasPersegi}>Hitung</button>
        <p className="mt-3">{hasilPersegi}</p>
      </section>

      <section className="card p-4">
        <h2 className="card-title">Luas Permukaan Kubus</h2>
        <div className="form-group">
          <label htmlFor="sisiKubus">Masukkan panjang sisi:</label>
          <input
            type="number"
            id="sisiKubus"
            className="form-control"
            placeholder="Masukkan panjang sisi"
            value={sisiKubus}
            onChange={(e) => setSisiKubus(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={hitungLuasKubus}>Hitung</button>
        <p className="mt-3">{hasilKubus}</p>
      </section>
    </div>
  );
}

export default Index;
