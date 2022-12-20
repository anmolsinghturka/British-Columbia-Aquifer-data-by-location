import { mount } from '@vue/test-utils'
import Home from '@/pages/Home.vue'
import { createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Home', () => {
  const wrapper = mount(Home, {
    localVue,
    data() {
      return {
        selectedLocation: 'Please select a location',
        aquifers: [
          // A 'Please select' option should be inserted
          { location: 'here' },
          { location: 'There' },
          { location: 'anywhere' },
          { location: 'Nowhere' },
          { location: null }, // null should be removed
          { location: '' }, // empty should be removed
          { location: 'here' }, // duplicate should be removed
          { location: '123 test ave' }
        ]
      }
    }
  })
  it('Check selectedLocation data', () => {
    expect(wrapper.find('#selectedLocationContainer strong').text()).toMatch('Please select a location')
    expect(wrapper.find('#selectLocation option').exists()).toBeTruthy()
  })

  it('Display aquifer details by location', async () => {
    await wrapper.setData({selectedLocation: 'Nowhere'})
    expect(wrapper.findAll('option').at(4).text()).toBe('Nowhere')
    //table to show details of selected location
    expect(wrapper.find('#selectedLocationDetail table').exists()).toBeTruthy()
  })

  // Begin known failing test
  it('Check alpha order', () => {
    expect(wrapper.findAll('option').at(1).text()).toBe('123 test ave')
    expect(wrapper.findAll('option').at(5).text()).toBe('There')
  })
  // End known failing test
  it('Check list null, empty and duplicate values removed', () => {
    expect(wrapper.findAll('option').length).toBe(6)
  })
})
