import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { Company } from "./companyData";

// Custom Styles for Professional Look
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#961515",
    paddingBottom: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#1A1A1A",
  },
  meta: {
    fontSize: 10,
    color: "#961515",
    marginTop: 5,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    padding: 5,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingVertical: 8,
    alignItems: "center",
  },
  label: {
    width: "30%",
    fontSize: 10,
    color: "#666666",
    textTransform: "uppercase",
  },
  value: {
    width: "70%",
    fontSize: 11,
    color: "#1A1A1A",
    fontWeight: "bold",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F5F2ED",
    padding: 8,
    marginTop: 20,
  },
  tableCol: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingTop: 10,
    textAlign: "center",
    fontSize: 8,
    color: "#999999",
  },
});

export const AuditReportPDF = ({ company }: { company: Company }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Official Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Audit Report</Text>
          <Text style={styles.meta}>
            MOKAZ MULTITRADE LTD • COMPLIANCE DIVISION
          </Text>
        </View>
        <View style={{ textAlign: "right" }}>
          <Text style={{ fontSize: 10 }}>
            Generated: {new Date().toLocaleDateString()}
          </Text>
          <Text style={{ fontSize: 10, color: "#961515", marginTop: 3 }}>
            Ref: {company.id}
          </Text>
        </View>
      </View>

      {/* Entity Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Corporate Entity Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Company Name</Text>
          <Text style={styles.value}>{company.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Taxpayer ID</Text>
          <Text style={styles.value}>{company.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Official Email</Text>
          <Text style={styles.value}>{company.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Current Status</Text>
          <Text style={[styles.value, { color: "#961515" }]}>
            STAGE {company.currentStage} IN PROGRESS
          </Text>
        </View>
      </View>

      {/* Audit Trail Table */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Audit Transparency Log</Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCol, { width: "30%" }]}>STAGE</Text>
          <Text style={[styles.tableCol, { width: "25%" }]}>ACTOR</Text>
          <Text style={[styles.tableCol, { width: "25%" }]}>TIMESTAMP</Text>
          <Text style={[styles.tableCol, { width: "20%" }]}>DURATION</Text>
        </View>
        {company.auditTrail.map((log, i) => (
          <View key={i} style={styles.row}>
            <Text
              style={{
                fontSize: 9,
                width: "30%",
                color: log.status === "completed" ? "#000" : "#AAA",
              }}
            >
              {log.stage}
            </Text>
            <Text style={{ fontSize: 9, width: "25%" }}>{log.actor}</Text>
            <Text style={{ fontSize: 9, width: "25%" }}>{log.timestamp}</Text>
            <Text style={{ fontSize: 9, width: "20%", color: "#961515" }}>
              {log.duration || "-"}
            </Text>
          </View>
        ))}
      </View>

      {/* Verified Documents */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Verified Document Inventory</Text>
        {company.docs.length > 0 ? (
          company.docs.map((doc, i) => (
            <View key={i} style={styles.row}>
              <Text style={{ fontSize: 9, width: "60%" }}>{doc.name}</Text>
              <Text style={{ fontSize: 9, width: "20%" }}>FY {doc.year}</Text>
              <Text style={{ fontSize: 9, width: "20%", textAlign: "right" }}>
                {doc.size}
              </Text>
            </View>
          ))
        ) : (
          <Text style={{ fontSize: 9, color: "#999" }}>
            No documentation verified yet.
          </Text>
        )}
      </View>

      <Text style={styles.footer}>
        This is a computer-generated audit report. Authenticity can be verified
        via the Mokaz Internal Node.
      </Text>
    </Page>
  </Document>
);
