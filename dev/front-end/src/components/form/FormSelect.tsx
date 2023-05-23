import { ChangeEventHandler, CSSProperties, ReactElement } from 'react';

import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Icon,
  InputGroup,
  InputLeftElement,
  Select,
  SelectProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaAsterisk } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { MdInfoOutline } from 'react-icons/md';

interface FormSelectProps extends Omit<SelectProps, 'icon'> {
  label?: string;
  name: string;
  items: Array<{ label?: string; value?: string | number }>;
  icon?: IconType;
  labelLeft?: boolean;
  defaultValue?: string | number;
  isRequired?: boolean;
  labelRight?: ReactElement;
  onSelect?: (e: any) => void;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  selectableDefault?: boolean;
  selectableText?: string;
  containerStyles?: CSSProperties;
  unselectedValue?: string | number;
  info?: string;
}

export function FormSelect({
  label,
  name,
  items,
  icon,
  labelLeft,
  defaultValue,
  isRequired,
  labelRight,
  onSelect,
  onChange,
  selectableText,
  selectableDefault = true,
  containerStyles,
  unselectedValue = '',
  info,
  ...props
}: FormSelectProps) {
  const { register, errors: formErrors } = useFormContext();
  const { colorMode } = useColorMode();

  // lógica para lidar com erros em objetos aninhados. ex: bank.accountNumber
  const keys = name.split('.');
  let lastObj = formErrors;
  for (const key of keys) {
    if (!lastObj[key]) {
      lastObj = null;
      break;
    }
    lastObj = lastObj[key];
  }
  const errors = lastObj;

  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', md: `${labelLeft && '200px'} 1fr` }}
      mb={labelLeft && '4'}
      style={containerStyles}
    >
      <FormControl>
        <Flex align="center" mb={label && 2}>
          {label && (
            <FormLabel mb={0}>
              {label || 'Label'}
              {isRequired && (
                <Icon
                  as={FaAsterisk}
                  className="required-label"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue('red.500', 'red.300')}
                />
              )}
            </FormLabel>
          )}
          {info && (
            <Tooltip label={info} hasArrow placement="right" arrowSize={6} rounded="md">
              <span>
                <Icon
                  as={MdInfoOutline}
                  fontSize=".8rem"
                  color={colorMode === 'light' ? 'gray.400' : 'whiteAlpha.400'}
                />
              </span>
            </Tooltip>
          )}
          {labelRight}
        </Flex>
        <InputGroup>
          {icon && (
            <InputLeftElement
              pointerEvents="none"
              h="100%"
              color={colorMode === 'light' ? 'gray.500' : 'whiteAlpha.500'}
              width={props.size === 'sm' ? '32px' : '40px'}
              height={props.size === 'sm' ? '32px' : '40px'}
            >
              <Icon as={icon} color={props.isDisabled && '#bfc0c1'} />
            </InputLeftElement>
          )}
          <Select
            name={name}
            ref={register()}
            isInvalid={!!errors}
            defaultValue={defaultValue ?? unselectedValue}
            variant="filled"
            onChange={onChange}
            color={colorMode === 'light' ? 'gray.800' : 'whiteAlpha.800'}
            onClick={onSelect}
            rounded={props.rounded || 'md'}
            iconColor={colorMode === 'light' ? 'gray.500' : 'whiteAlpha.500'}
            {...props}
          >
            <option value={unselectedValue} disabled={selectableDefault}>
              {selectableText ?? 'Selecione'}
            </option>
            {items?.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </InputGroup>
        {errors && (
          <FormHelperText fontSize="smaller" color="red.400">
            {errors.message}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
}
