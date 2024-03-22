// BaseComponent.jsx
const BaseComponent = ({ title, description, children }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-[500px]">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div>{children}</div>
      </div>
    );
  };
  
  export default BaseComponent;
  