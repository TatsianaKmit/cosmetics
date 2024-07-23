import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Spin } from "@gravity-ui/uikit";

export default function ClassifierItem(props) {
    const { name, img, brand_name, isTypes } = props;
    const [imageLoading, setImageLoading] = useState(true);

    const style = {
        width: '210px',
        height: '210px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    const path = isTypes ? `products?filter=catalog&category=${name}` : `products?filter=brands&brand=${brand_name}`;

    let classifierItem;
    if (isTypes) {
        classifierItem = (
            <Card style={style} view="filed" type="container" size="l" className="catalog-page__card">
                {imageLoading && <div className="spin" size='xs'><Spin /></div>}
                <Link to={`/${path}`}>
                    <div className="catalog-page__photo">
                        <img src={img} alt={name} onError={(e) => {
                            e.target.src = `https://placehold.co/120x120@3x?text=${name}`;
                            setImageLoading(true)
                        }}
                            onLoad={handleImageLoad} />
                    </div>
                    <div className="catalog-page__title">{name}</div>
                </Link>
            </Card>
        );
    } else {
        classifierItem = (
            <div >
                <Link to={`/${path}`} >
                    <Button view="normal" size="l" className="brands-page__button">
                        {brand_name}
                    </Button>
                </Link>
            </div>
        )
    }

    return <div>{classifierItem}</div>;
}
