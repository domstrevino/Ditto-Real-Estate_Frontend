import './index.css';

type ContentCardProps = {
    children: React.ReactNode;
};

function ContentCard({ children }: ContentCardProps) {
    return (
        <div className = 'contentCard'>
            {children}
        </div>
    );
}

export default ContentCard;