import React from 'react';
import { Field } from 'redux-form';
import Preloader from '../../../Preloader/Preloader';

const Category = ({ data }) => {

    if (!data && !data.data && !data.data.id) {
        return <Preloader />
    }

    return (
        <Field
            showSearch
            style={{
                width: 200,
                height: 40
            }}
            component="select"
            placeholder="Category"
            optionFilterProp="children"
            name="category"
            className="addProduct_input"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {data && data.data && data.data.map(item =>
                <option key={item.id} value={item.id}>{item.name}</option>
            )}
        </Field>
    )
}

export default Category