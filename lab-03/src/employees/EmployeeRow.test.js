import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
    let wrapper;

    beforeEach(() => {
        const employee = {
            username: 'afleer',
            email: 'andrew.fleer@gmail.com',
            firstName: 'Andrew',
            lastName: 'Fleer',
            admin: 'true'
        };
        wrapper = shallow(<EmployeeRow employee={employee} />);
    });

    it('should instantiate the Employee Row Component', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render values into expected cells', () => {
        expect(wrapper.find('td')).toHaveLength(5);
        expect(wrapper.find('td').at(0).text()).toEqual('afleer');
        expect(wrapper.find('td').at(1).text()).toEqual('andrew.fleer@gmail.com');
        expect(wrapper.find('td').at(2).text()).toEqual('Andrew');
        expect(wrapper.find('td').at(3).text()).toEqual('Fleer');
        expect(wrapper.find('td').at(4).text()).toEqual('Yes');
    });
});
