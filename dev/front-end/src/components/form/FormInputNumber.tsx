import { ReactElement } from 'react';

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  useColorModeValue,
} from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import { FaAsterisk } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface FormInputProps extends NumberInputProps {
  label?: string;
  name: string;
  icon?: IconType;
  labelLeft?: boolean;
  defaultValue?: number;
  isRequired?: boolean;
  labelRight?: ReactElement;
  rightElement?: React.ReactNode;
  numberInputStepper?: boolean;
}

export function FormInputNumber({
  label,
  name,
  icon,
  labelLeft,
  defaultValue,
  isRequired,
  labelRight,
  rightElement,
  numberInputStepper = true,
  ...props
}: FormInputProps) {
  const { control, errors: formErrors } = useFormContext();

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
    >
      <Controller
        defaultValue={defaultValue || 0}
        control={control}
        name={name}
        render={({ onChange, value }) => (
          <FormControl>
            {label && (
              <FormLabel mb={!labelLeft && '2'}>
                {!!label && label}
                {labelRight}
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
            <InputGroup>
              {icon && (
                <InputLeftElement
                  pointerEvents="none"
                  width={props.size === 'sm' ? '32px' : '40px'}
                  height={props.size === 'sm' ? '32px' : '40px'}
                >
                  <Icon as={icon} />
                </InputLeftElement>
              )}
              <NumberInput
                onChange={onChange}
                value={value}
                variant="filled"
                w="100%"
                rounded={props.rounded || 'md'}
                {...props}
              >
                <NumberInputField pl={icon ? 10 : 2} />
                {numberInputStepper && (
                  <NumberInputStepper
                    mr={rightElement && 10}
                    borderRight={rightElement && '1px solid rgba(113, 128, 150, 0.5)'}
                  >
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                )}
                {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
              </NumberInput>
            </InputGroup>
            {errors && (
              <FormHelperText fontSize="smaller" color="red.400">
                {errors.message}
              </FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Grid>
  );
}
