import { useState } from 'react';
import QRCode from 'react-qr-code';
import QrCodeLink from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(linkUrl) {
    QrCodeLink.toDataURL(linkUrl, {
      width: 600,
      margin: 2
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className='container'>

      <QRCode 
        value={link}
      />

      <input 
        className='input'
        placeholder='Digite seu link...'
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={'qrcode.png'}>Baixar QrCode</a>
    </div>
  );
}

export default App;
