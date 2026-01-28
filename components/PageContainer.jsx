// components/PageContainer.jsx
export default function PageContainer({ children, className = "" }) {
  return (
    <div className={`pt-24 ${className}`}>
      {children}
    </div>
  );
}
