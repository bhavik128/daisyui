import { ButtonHTMLAttributes, FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: '',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      link: 'btn-link',
      glass: 'glass',
      circle: 'btn-circle',
      loading: 'loading',
      theme: 'btn-square btn-outline'
    },
    size: {
      default: 'btn-md',
      sm: 'btn-sm',
      lg: 'btn-lg',
      full: 'btn-block'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
