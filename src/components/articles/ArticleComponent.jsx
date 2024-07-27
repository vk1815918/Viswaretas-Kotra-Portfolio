// import React, { useState, useEffect } from 'react';
// import { getLinkPreview } from 'link-preview-js';

// const EnhancedLinkPreview = () => {
//   const [previewData, setPreviewData] = useState(null);
//   const [hasError, setHasError] = useState(false);
//   const url = "https://jindal.utdallas.edu/news/finhack-2024-challenges-and-encourages-ut-dallas-students/";

//   useEffect(() => {
//     getLinkPreview(url)
//       .then(data => {
//         setPreviewData(data);
//       })
//       .catch(error => {
//         console.error('Error loading link preview:', error);
//         setHasError(true);
//       });
//   }, [url]);

//   return (
//     <div>
//       {
//     //   hasError ? (
//     //     <div>Failed to load link preview.</div>
//     //   ) : 
//       (
//         previewData && (
//           <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', maxWidth: '500px' }}>
//             {previewData.images && previewData.images.length > 0 && (
//               <img src={previewData.images[0]} alt="Preview" style={{ width: '100%', borderRadius: '5px' }} />
//             )}
//             <h3>{previewData.title}</h3>
//             <p>{previewData.description}</p>
//             <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
//           </div>
//         )
//       )
//       }
//     </div>
//   );
// };

// export default EnhancedLinkPreview;
