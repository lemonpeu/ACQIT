import NextImage from 'next/image';

const Image = (props) => {
    return <NextImage {...props} unoptimized />;
};

export default Image;
