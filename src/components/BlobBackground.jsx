const BlobBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Green Blob (left) */}
      <div className="absolute w-[300px] h-[250px] bg-green-300 rounded-full blur-[150px] opacity-70 left-[10%] top-[20%]" />

      {/* Orange Blob (center) */}
      <div className="absolute w-[200px] h-[400px] bg-orange-300 rounded-full blur-[150px] opacity-70 left-[45%] top-[30%]" />

      {/* Purple Blob (top-right) */}
      <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full blur-[150px] opacity-70 right-[10%] top-[10%]" />
    </div>
  );
};

export default BlobBackground;
