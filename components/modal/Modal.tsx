import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'
import { LocaleContext } from '../locale-provider'
import { WithTheme, WithThemeStyles } from '../style'
import { getComponentLocale } from '../_util/getLocale'
import alert from './alert'
import en_US from './locale/en_US'
import RCModal from './ModalView'
import operation from './operation'
import prompt from './prompt'
import { CallbackOnBackHandler, ModalPropsType } from './PropsType'
import modalStyles, { ModalStyle } from './style/index'

export interface ModalProps
  extends ModalPropsType<TextStyle>,
    WithThemeStyles<ModalStyle> {
  style?: StyleProp<ViewStyle>
  bodyStyle?: StyleProp<ViewStyle>
  onRequestClose?: CallbackOnBackHandler
  children?: React.ReactNode
}

class AntmModal extends React.Component<ModalProps, any> {
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    animationType: 'fade',
    onClose() {},
    footer: [],
    transparent: false,
    popup: false,
    animateAppear: true,
    operation: false,
  }
  static alert: typeof alert
  static operation: typeof operation
  static prompt: typeof prompt

  static contextType = LocaleContext

  render() {
    const {
      title,
      closable,
      footer,
      children,
      style,
      animateAppear,
      maskClosable,
      popup,
      transparent,
      visible,
      onClose,
      bodyStyle,
      onAnimationEnd,
      onRequestClose,
    } = this.props

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      (this as any).context,
      'Modal',
      () => en_US,
    )

    return (
      <WithTheme styles={this.props.styles} themeStyles={modalStyles}>
        {(styles) => {
          let btnGroupStyle = styles.buttonGroupV
          let horizontalFlex = {}
          if (footer && footer.length === 2 && !this.props.operation) {
            btnGroupStyle = styles.buttonGroupH
            horizontalFlex = { flex: 1 }
          }
          const buttonWrapStyle =
            footer && footer.length === 2
              ? styles.buttonWrapH
              : styles.buttonWrapV
          let footerDom
          if (footer && footer.length) {
            const footerButtons = footer.map((button, i) => {
              let buttonStyle = {}
              if (this.props.operation) {
                buttonStyle = styles.buttonTextOperation
              }
              if (button.style) {
                buttonStyle = button.style
                if (typeof buttonStyle === 'string') {
                  const styleMap: {
                    [key: string]: object
                  } = {
                    cancel: { color: '#000' },
                    default: {},
                    destructive: { color: 'red' },
                  }
                  buttonStyle = styleMap[buttonStyle] || {}
                }
              }
              const noneBorder =
                footer && footer.length === 2 && i === 1
                  ? { borderRightWidth: 0 }
                  : {}
              const onPressFn = () => {
                if (button.onPress) {
                  button.onPress()
                }
                if (onClose) {
                  onClose()
                }
              }
              return (
                <TouchableHighlight
                  key={i}
                  style={horizontalFlex}
                  underlayColor="#ddd"
                  onPress={onPressFn}>
                  <View style={[buttonWrapStyle, noneBorder]}>
                    <Text style={[styles.buttonText, buttonStyle]}>
                      {button.text || `${_locale.buttonText}${i}`}
                    </Text>
                  </View>
                </TouchableHighlight>
              )
            })
            footerDom = (
              <View style={[btnGroupStyle, styles.footer]}>
                {footerButtons}
              </View>
            )
          }

          let animType = this.props.animationType
          if (transparent) {
            if (animType === 'slide') {
              animType = 'slide-up'
            }
            const closableDom = closable ? (
              <View style={[styles.closeWrap]}>
                <TouchableWithoutFeedback onPress={onClose}>
                  <View>
                    <Text style={[styles.close]}>×</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            ) : null
            return (
              <View style={styles.container}>
                <RCModal
                  onClose={onClose}
                  animationType={animType}
                  wrapStyle={transparent ? styles.wrap : undefined}
                  style={styles.wrap}
                  visible={visible}
                  onAnimationEnd={onAnimationEnd}
                  onRequestClose={onRequestClose}
                  animateAppear={animateAppear}
                  maskClosable={maskClosable}>
                  <KeyboardAvoidingView
                    behavior="padding"
                    enabled={Platform.OS === 'ios'}>
                    <View style={[styles.innerContainer, style]}>
                      {title ? (
                        <Text style={[styles.header]}>{title}</Text>
                      ) : null}
                      <View style={[styles.body, bodyStyle]}>{children}</View>
                      {footerDom}
                      {closableDom}
                    </View>
                  </KeyboardAvoidingView>
                </RCModal>
              </View>
            )
          }
          if (popup) {
            let aType = 'SlideDown'
            if (animType === 'slide-up') {
              animType = 'slide-up'
              aType = 'SlideUp'
            } else {
              animType = 'slide-down'
            }
            return (
              <View style={styles.container}>
                <RCModal
                  onClose={onClose}
                  animationType={animType}
                  // tslint:disable-next-line:jsx-no-multiline-js
                  style={[
                    styles.popupContainer,
                    (styles as any)[`popup${aType}`],
                    style,
                  ]}
                  visible={visible}
                  onAnimationEnd={onAnimationEnd}
                  onRequestClose={onRequestClose}
                  animateAppear={animateAppear}
                  maskClosable={maskClosable}>
                  <View style={bodyStyle}>{children}</View>
                </RCModal>
              </View>
            )
          }
          if (animType === 'slide') {
            animType = undefined
          }
          return (
            <View style={styles.container}>
              <RCModal
                visible={visible}
                animationType={animType}
                onRequestClose={onRequestClose}
                onClose={onClose}>
                <View style={style}>{children}</View>
              </RCModal>
            </View>
          )
        }}
      </WithTheme>
    )
  }
}

export default AntmModal
