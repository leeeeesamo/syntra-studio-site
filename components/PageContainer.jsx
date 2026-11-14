// components/PageContainer.jsx
export default function PageContainer({ children, className = "" }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
