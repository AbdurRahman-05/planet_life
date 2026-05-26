import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, CheckCircle2, Clock, Users, ArrowRight } from "lucide-react";

interface Destination {
  id: string;
  name: string;
}

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinations: Destination[];
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({
  isOpen,
  onClose,
  destinations,
}) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    destination: "",
    travelMonth: "",
    duration: "",
    numPersons: "",
    name: "",
    email: "",
    whatsapp: "",
    language: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (
      !formData.destination ||
      !formData.travelMonth ||
      !formData.duration ||
      !formData.numPersons
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields to proceed.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.whatsapp ||
      !formData.language
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields to submit.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Construct WhatsApp Message
    const message =
      `*New Explore Packages Quote Request - Planet Life*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Destination:* ${formData.destination}%0A` +
      `*Month:* ${formData.travelMonth}%0A` +
      `*Duration:* ${formData.duration}%0A` +
      `*Persons:* ${formData.numPersons}%0A` +
      `*Preferred Language:* ${formData.language}`;

    const whatsappUrl = `https://wa.me/919994553297?text=${message}`;

    // Minor delay for feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Sending your request to our travel experts.",
    });

    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    onClose();

    // Reset Form
    setStep(1);
    setFormData({
      destination: "",
      travelMonth: "",
      duration: "",
      numPersons: "",
      name: "",
      email: "",
      whatsapp: "",
      language: "",
    });

    // Navigate/clear param
    navigate("/packages");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-[420px] w-[95vw] bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 border border-white/20 overflow-hidden">
        <DialogHeader className="text-center mb-4 sm:mb-6">
          <h3 className="font-heading font-semibold text-muted-foreground text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1">
            Your Perfect Holiday Awaits!
          </h3>
          <DialogTitle className="text-lg sm:text-xl font-bold text-foreground font-heading uppercase text-center w-full">
            Get Your Custom Quote
          </DialogTitle>
          <DialogDescription className="sr-only">
            Lead form to unlock custom travel packages.
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                <MapPin className="w-3 h-3" /> Destination
              </Label>
              <Select
                value={formData.destination}
                onValueChange={(v) => handleSelectChange("destination", v)}
              >
                <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                  <SelectValue placeholder="Select Destination" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="All Destinations">All Destinations</SelectItem>
                  {destinations.map((d) => (
                    <SelectItem key={d.id} value={d.name}>
                      {d.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3" /> Travel Month
              </Label>
              <Select
                value={formData.travelMonth}
                onValueChange={(v) => handleSelectChange("travelMonth", v)}
              >
                <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Duration
                </Label>
                <Select
                  value={formData.duration}
                  onValueChange={(v) => handleSelectChange("duration", v)}
                >
                  <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    <SelectItem value="3-5">3-5 Days</SelectItem>
                    <SelectItem value="5-7">5-7 Days</SelectItem>
                    <SelectItem value="7-10">7-10 Days</SelectItem>
                    <SelectItem value="10+">10+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2">
                  <Users className="w-3 h-3" /> Persons
                </Label>
                <Select
                  value={formData.numPersons}
                  onValueChange={(v) => handleSelectChange("numPersons", v)}
                >
                  <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                    <SelectValue placeholder="Persons" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    <SelectItem value="solo">Solo</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                    <SelectItem value="family-3">Family (3)</SelectItem>
                    <SelectItem value="family-4">Family (4+)</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleNext}
              className="w-full bg-red-600 hover:bg-black text-white font-extrabold py-6 rounded-xl mt-6 uppercase transition-all duration-300 shadow-lg"
            >
              Continue Request
            </Button>

            <div className="flex justify-center gap-2 mt-4">
              <div className="w-8 h-1.5 rounded-full bg-red-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-red-600 font-extrabold uppercase text-xs">Name</Label>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-50 border-gray-200 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-red-600 font-extrabold uppercase text-xs">Email Address</Label>
              <Input
                name="email"
                type="email"
                placeholder="youremail@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-50 border-gray-200 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-red-600 font-extrabold uppercase text-xs">WhatsApp Number</Label>
              <div className="flex">
                <div className="bg-gray-100 border border-r-0 border-gray-200 rounded-l-md px-3 flex items-center text-gray-500 text-sm">
                  🇮🇳 +91
                </div>
                <Input
                  name="whatsapp"
                  placeholder="9876543210"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="bg-gray-50 border-gray-200 rounded-l-none text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-red-600 font-extrabold uppercase text-xs">Select Language</Label>
              <Select
                value={formData.language}
                onValueChange={(v) => handleSelectChange("language", v)}
              >
                <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="tamil">Tamil</SelectItem>
                  <SelectItem value="malayalam">Malayalam</SelectItem>
                  <SelectItem value="kannada">Kannada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-black text-white font-bold py-6 rounded-xl mt-6 uppercase transition-all duration-300 shadow-lg tracking-widest"
            >
              {isSubmitting ? "Processing..." : "Submit Quote Request"}
            </Button>

            <div className="flex justify-center gap-2 mt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
              <div className="w-8 h-1.5 rounded-full bg-primary/40"></div>
            </div>

            <Button
              variant="link"
              onClick={() => setStep(1)}
              className="w-full text-sm text-muted-foreground hover:text-foreground"
            >
              Back to previous step
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
