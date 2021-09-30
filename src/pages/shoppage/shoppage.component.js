import { React, Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div>{
                collection.map(({ id, ...otherCollectionProp }) => (
                    <CollectionPreview key={id} {...otherCollectionProp} />
                ))}</div>
        )
    }
}

export default ShopPage;