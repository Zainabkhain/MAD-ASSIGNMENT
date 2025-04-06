import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [s, setS] = useState('');
  const [m, setM] = useState(false);
  const [c, setC] = useState(null);

  const ct = [
    { id: '1', n: 'zill e huma', p: '03001230001', g: 'Family' },
    { id: '2', n: 'asalat khan', p: '03112345678', g: 'Friends' },
    { id: '3', n: 'humaira', p: '03211234567', g: 'Work' },
    { id: '4', n: 'mahnoor', p: '03331230001', g: 'Friends' },
    { id: '5', n: 'sadia', p: '03441231234', g: 'Work' },
    { id: '6', n: 'noorita', p: '03551239876', g: 'Family' },
    { id: '7', n: 'iffra', p: '03661234511', g: 'Friends' },
    { id: '8', n: 'maryum', p: '03771239876', g: 'Work' },
    { id: '9', n: 'amna ', p: '03881236789', g: 'Family' },
    { id: '10', n: 'alishba ', p: '03991231266', g: 'Friends' },
    { id: '1', n: 'sameera', p: '0300123000166', g: 'Family' },
    { id: '2', n: 'ayaan', p: '03112345124', g: 'Friends' },
    { id: '3', n: 'areeba', p: '03211234908', g: 'Work' },
    { id: '4', n: 'aleeza', p: '0333123405', g: 'Friends' },
    { id: '5', n: 'saliha ', p: '03441231804', g: 'Work' },
    { id: '6', n: 'noor ul ain', p: '035512398345', g: 'Family' },
    { id: '7', n: 'ali', p: '03661235678', g: 'Friends' },
    { id: '8', n: 'zainab', p: '0377123098', g: 'Work' },
    { id: '9', n: 'ameena ', p: '03881230468', g: 'Family' },
    { id: '10', n: 'bisma', p: '039912324589', g: 'Friends' },
  ];

  const gr = ['Family', 'Friends', 'Work'].map((t) => ({
    title: t,
    data: ct
      .filter((x) => x.g === t)
      .filter((x) =>
        x.n.toLowerCase().includes(s.toLowerCase()) || x.p.includes(s)
      ),
  }));

  const sh = (x) => {
    setC(x);
    setM(true);
  };

  return (
    <View style={st.v}>
      <Text style={st.h}>My Contact Book</Text>

      <TextInput
        placeholder="Type name or number"
        value={s}
        onChangeText={setS}
        style={st.i}
      />

      <SectionList
        sections={gr}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <Text style={st.sh}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => sh(item)} style={st.it}>
            <Text style={st.n}>{item.n}</Text>
            <Text style={st.p}>{item.p}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={m}
        animationType="slide"
        transparent
        onRequestClose={() => setM(false)}
      >
        <View style={st.ov}>
          <View style={st.md}>
            {c && (
              <>
                <Text style={st.mt}>{c.n}</Text>
                <Text>Contact: {c.p}</Text>
                <Text>Group: {c.g}</Text>
              </>
            )}
            <TouchableOpacity
              style={st.bt}
              onPress={() => setM(false)}
            >
              <Text style={st.btT}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const st = StyleSheet.create({
  v: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FAFAFA',
  },
  h: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  i: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  sh: {
    fontSize: 16,
    backgroundColor: '#E5EAF0',
    padding: 6,
    fontWeight: '600',
    marginTop: 10,
  },
  it: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 0.4,
    borderColor: '#ccc',
  },
  n: {
    fontSize: 15,
    fontWeight: '500',
  },
  p: {
    fontSize: 13,
    color: '#666',
  },
  ov: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000088',
    padding: 25,
  },
  md: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 10,
  },
  mt: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  bt: {
    backgroundColor: '#28a745',
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  btT: {
    color: '#fff',
    fontWeight: '500',
  },
});
