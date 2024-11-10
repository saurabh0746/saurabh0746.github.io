import { VisuallyHidden } from '~/components/visually-hidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './decoder-text.module.css';

// prettier-ignore
const glyphs = [
  'सौरभ', 'मोटरसाइकिल', 'मोटोव्लॉगर', 'डेवलपर',
  'प्रकृति', 'दोस्त', 'प्रोग्रामिंग', 'विकास', 'तकनीक',
  'डिजाइन', 'सोच', 'कला', 'यात्रा', 'शांति',
  'कोड', 'प्रोजेक्ट', 'टीम', 'वेब', 'मोबाइल',
  'सेवा', 'डाटा', 'ब्रांडिंग', 'समाधान', 'उदाहरण',
  'समर्थन', 'अवलोकन', 'सीखना', 'विकल्प', 'उपकरण',
  'प्यार', 'शौक', 'स्वतंत्रता', 'संवेदनशील', 'दुनिया',
  'जुनून', 'नवीनता', 'समुदाय', 'ज्ञान', 'रचनात्मकता',
  'उन्नति', 'प्रतिभा', 'योग्यता', 'सफलता', 'सहयोग',
  'मूल्य', 'विश्वास', 'भविष्य', 'अनुभव', 'विकासशील',
  'नेतृत्व', 'प्रेरणा', 'साधना', 'पर्यावरण', 'सुरक्षा',
  'प्रयास', 'प्रतिष्ठा', 'प्रयासशील', 'समाज', 'विवेक',
  'धैर्य', 'विश्वास', 'सकारात्मक', 'इच्छा', 'प्रयोजन'
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: '' }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.on('change', value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
