import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

interface ProductDetailOptionSelectorModalProps {
  visible: boolean;
  values: string[];
  onSelect: (value: string) => void;
  onClose: () => void;
}

export const ProductDetailOptionSelectorModal = ({
  visible,
  values,
  onSelect,
  onClose,
}: ProductDetailOptionSelectorModalProps) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={values}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                style={styles.option}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 8,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#0cec93',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
