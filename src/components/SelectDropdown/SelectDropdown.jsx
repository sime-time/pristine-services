import styles from './SelectDropdown.module.css';
import * as Select from '@radix-ui/react-select';
import { FaChevronUp, FaChevronDown, FaCheck } from 'react-icons/fa6';

function SelectDropdown({ items }) {
  return (
    <Select.Root>
      <Select.Trigger className={styles.SelectTrigger}>
        <Select.Value placeholder={items[0]} />
        <Select.Icon>
          <FaChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className={styles.SelectPortal}>
        <Select.Content className={styles.SelectContent}>
          <Select.Viewport>
            <Select.Group>
              {items.map((item, index) =>
                <Select.Item key={index} value={item.toLowerCase()} className={styles.SelectItem}>
                  <Select.ItemText>{item}</Select.ItemText>
                </Select.Item>
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default SelectDropdown; 