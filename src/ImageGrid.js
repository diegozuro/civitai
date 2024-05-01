import React, { useState, useEffect, useCallback } from 'react';

function ImageGrid() {
  const [imagesLeft, setImagesLeft] = useState([]);
  const [imagesLeftCenter, setImagesLeftCenter] = useState([]);
  const [imagesRightCenter, setImagesRightCenter] = useState([]);
  const [imagesRight, setImagesRight] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://civitai.com/api/v1/images`);
        const data = await response.json();
        const items = data?.items;
        if (Array.isArray(items)) {
          const length = items.length;
          const leftColumn = items.slice(0, Math.ceil(length / 4));
          const centerLeftColumn = items.slice(Math.ceil(length / 4), Math.ceil(length / 2));
          const centerRightColumn = items.slice(Math.ceil(length / 2), Math.ceil((length / 4) * 3));
          const rightColumn = items.slice(Math.ceil((length / 4) * 3));

          setImagesLeft(leftColumn);
          setImagesLeftCenter(centerLeftColumn);
          setImagesRightCenter(centerRightColumn)
          setImagesRight(rightColumn);

        } else {
          console.error('Invalid response format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!loading) {
      fetchImages();
    }
  }, []);

  const fetchData = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    const response = await fetch(`https://civitai.com/api/v1/images?page=${currentPage}`);
    const data = await response.json();
    const items = data?.items;
    if (Array.isArray(items)) {
      const length = items.length;
      const leftColumn = items.slice(0, Math.ceil(length / 4) +5);
      const centerLeftColumn = items.slice(Math.ceil(length / 4), Math.ceil(length / 2));
      const centerRightColumn = items.slice(Math.ceil(length / 2), Math.ceil((length / 4) * 3));
      const rightColumn = items.slice(Math.ceil((length / 4) * 3) +10);

      setImagesLeft(prevImages => {  
        return [...prevImages, ...leftColumn];
      });
      setImagesLeftCenter(prevImages => {      
        return [...prevImages, ...centerLeftColumn];
      });
      setImagesRightCenter(prevImages => {        
        return [...prevImages, ...centerRightColumn];
      });
      setImagesRight(prevImages => { 
        return [...prevImages, ...rightColumn];
      });
      setCurrentPage((prevIndex) => prevIndex + 1)

    } else {
      console.error('Invalid response format:', data);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMenuOpen = (image) => {
    setSelectedImage(image);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setSelectedImage(null);
    setMenuOpen(false);
  };

  const handleDeleteImage = (column) => {
    switch (column) {
      case 'left':
        setImagesLeft(imagesLeft.filter(image => image.id !== selectedImage));
        break;
      case 'centerLeft':
        setImagesLeftCenter(imagesLeftCenter.filter(image => image.id !== selectedImage));
        break;
      case 'centerRight':
        setImagesRightCenter(imagesRightCenter.filter(image => image.id !== selectedImage));
        break;
      case 'right':
        setImagesRight(imagesRight.filter(image => image.id !== selectedImage));
        break;
      default:
        break;
    }
    handleMenuClose();
  };

  const handleDownloadImage = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        responseType: 'blob' 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const blob = await response.blob();
      
      const url2 = URL.createObjectURL(blob);
      
      const anchor = document.createElement('a');
      anchor.href = url2;
      anchor.download = `image_${selectedImage}.jpg`;
      
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
    
    handleMenuClose();
  };

  return (
    <div className="m-14 flex justify-between">
      <div className="w-1/4">
        {imagesLeft.map(({ id, url, hash, width, height }, index) => (
          <div key={id + Math.random()} className="relative rounded-3 overflow-hidden m-4 border border-gray-500">
            <img src={url} alt={`Image ${index}`} className="w-full h-auto" />
            <div className="absolute top-2 right-2 mt-2 mr-2 z-10">
              <button className="p-1 bg-transparent border-none" onClick={() => handleMenuOpen(id)}>
                <div className="w-2 h-2 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
              </button>
            </div>

            <div className="absolute bottom-2 left-2 right-2 bg-gray-700 bg-opacity-40 py-1 px-2 rounded-3 text-5">
            👍 {Math.floor(Math.random() * 2500) + 1}  ❤️ {Math.floor(Math.random() * 2500) + 1}  😂 {Math.floor(Math.random() * 2500) + 1}  😊 {Math.floor(Math.random() * 2500) + 1}
            </div>

            {menuOpen && selectedImage === id && (
              <div className="absolute top-8 right-2 z-20 bg-gray-700 rounded p-2 h-30 w-30">
                <button className="block mb-2  text-gray-300 text-4" onClick={() => handleDownloadImage(url)}>Download</button>
                <button className="block  text-gray-300 text-4" onClick={() => handleDeleteImage('left')}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-1/4">
        {imagesLeftCenter.map(({ id, url, hash, width, height }, index) => (
          <div key={id + Math.random()} className="relative rounded-3 overflow-hidden my-4 mr-2" >
            <img src={url} alt={`Image ${index}`} className="w-full h-full" />
            <div className="absolute top-2 right-2 mt-2 mr-2 z-10">
              <button className="p-1 bg-transparent border-none" onClick={() => handleMenuOpen(id)}>
                <div className="w-2 h-2 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
              </button>
            </div>
            
            <div className="absolute bottom-2 left-2 right-2 bg-gray-700 bg-opacity-40 py-1 px-2 rounded-3 text-5">
            👍 {Math.floor(Math.random() * 2500) + 1}  ❤️ {Math.floor(Math.random() * 2500) + 1}  😂 {Math.floor(Math.random() * 2500) + 1}  😊 {Math.floor(Math.random() * 2500) + 1}
            </div>

            {menuOpen && selectedImage === id && (
              <div className="absolute top-8 right-2 z-20 bg-gray-700 rounded p-2 h-30 w-30">
                <button className="block mb-2  text-gray-300 text-4" onClick={() => handleDownloadImage(url)}>Download</button>
                <button className="block  text-gray-300 text-4" onClick={() => handleDeleteImage('centerLeft')}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-1/4">
        {imagesRightCenter.map(({ id, url, hash, width, height }, index) => (
          <div key={id + Math.random()} className="relative rounded-3 overflow-hidden my-4 ml-2" >
            <img src={url} alt={`Image ${index}`} className="w-full h-full" />
            <div className="absolute top-2 right-2 mt-2 mr-2 z-10">
              <button className="p-1 bg-transparent border-none" onClick={() => handleMenuOpen(id)}>
                <div className="w-2 h-2 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
              </button>
            </div>

            <div className="absolute bottom-2 left-2 right-2 bg-gray-700 bg-opacity-40 py-1 px-2 rounded-3 text-5">
            👍 {Math.floor(Math.random() * 2500) + 1}  ❤️ {Math.floor(Math.random() * 2500) + 1}  😂 {Math.floor(Math.random() * 2500) + 1}  😊 {Math.floor(Math.random() * 2500) + 1}
            </div>

            {menuOpen && selectedImage === id && (
              <div className="absolute top-8 right-2 z-20 bg-gray-700 rounded p-2 h-30 w-30">
                <button className="block mb-2  text-gray-300 text-4" onClick={() => handleDownloadImage(url)}>Download</button>
                <button className="block  text-gray-300 text-4" onClick={() => handleDeleteImage('centerRight')}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-1/4">
        {imagesRight.map(({ id, url, hash, width, height }, index) => (
          <div key={id + Math.random()} className="relative rounded-3 overflow-hidden m-4 ">
            <img src={url} alt={`Image ${index}`} className="w-full h-auto" />
            <div className="absolute top-2 right-2 mt-2 mr-2 z-10">
              <button className="p-1 bg-transparent border-none" onClick={() => handleMenuOpen(id)}>
                <div className="w-2 h-2 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
                <div className="w-2 h-2 mt-1 bg-white border-white rounded"></div>
              </button>
            </div>

            <div className="absolute bottom-2 left-2 right-2 bg-gray-700 bg-opacity-40 py-1 px-2 rounded-3 text-5">
            👍 {Math.floor(Math.random() * 2500) + 1}  ❤️ {Math.floor(Math.random() * 2500) + 1}  😂 {Math.floor(Math.random() * 2500) + 1}  😊 {Math.floor(Math.random() * 2500) + 1}
            </div>

            {menuOpen && selectedImage === id && (
              <div className="absolute top-8 right-2 z-20 bg-gray-700 rounded p-2 h-30 w-30">
                <button className="block mb-2  text-gray-300 text-4" onClick={() => handleDownloadImage(url)}>Download</button>
                <button className="block  text-gray-300 text-4" onClick={() => handleDeleteImage('right')}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="bottom-of-page" style={{ height: '10px' }}></div>
    </div>
  );
}

export default ImageGrid;
