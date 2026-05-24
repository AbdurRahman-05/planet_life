import { useState, useEffect } from "react";
import { useAdmin, HomeContent, StrangerTripPackage } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash, Edit } from "lucide-react";
import { CloudinaryUpload } from "@/components/admin/CloudinaryUpload";
import { getImageSrc } from "@/data/imageMap";

const HomeEditor = () => {
    const { homeContent, updateHomeContent } = useAdmin();
    const [formData, setFormData] = useState<HomeContent>(homeContent);
    const { toast } = useToast();

    // Stranger trips editing states
    const [editingPackageId, setEditingPackageId] = useState<string | null>(null);
    const [packageForm, setPackageForm] = useState<Partial<StrangerTripPackage>>({
        title: "",
        image: "",
        date: "",
        price: "",
        month: "",
        note: "",
        link: ""
    });
    const [showPackageForm, setShowPackageForm] = useState(false);

    useEffect(() => {
        setFormData(homeContent);
    }, [homeContent]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddPackage = () => {
        setEditingPackageId(null);
        setPackageForm({
            title: "",
            image: "",
            date: "",
            price: "",
            month: "",
            note: "",
            link: ""
        });
        setShowPackageForm(true);
    };

    const handleEditPackage = (pkg: StrangerTripPackage) => {
        setEditingPackageId(pkg.id);
        setPackageForm(pkg);
        setShowPackageForm(true);
    };

    const handleDeletePackage = (id: string) => {
        if (window.confirm("Are you sure you want to delete this package?")) {
            const updated = (formData.strangerTrips || []).filter(p => p.id !== id);
            setFormData(prev => ({ ...prev, strangerTrips: updated }));
        }
    };

    const handleSavePackage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!packageForm.title || !packageForm.image || !packageForm.date || !packageForm.price || !packageForm.month || !packageForm.link) {
            alert("Please fill in all required fields (marked with *).");
            return;
        }
        
        const currentPackages = [...(formData.strangerTrips || [])];
        if (editingPackageId) {
            const index = currentPackages.findIndex(p => p.id === editingPackageId);
            if (index !== -1) {
                currentPackages[index] = { ...packageForm, id: editingPackageId } as StrangerTripPackage;
            }
        } else {
            currentPackages.push({
                ...packageForm,
                id: `stranger-${Date.now()}`
            } as StrangerTripPackage);
        }
        
        setFormData(prev => ({ ...prev, strangerTrips: currentPackages }));
        setShowPackageForm(false);
        setEditingPackageId(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateHomeContent(formData);
        toast({
            title: "Home Page Updated",
            description: "Changes have been saved successfully.",
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit Home Page Content</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Hero Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="heroTitle">Hero Title</Label>
                            <Input
                                id="heroTitle"
                                name="heroTitle"
                                value={formData.heroTitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                            <Textarea
                                id="heroSubtitle"
                                name="heroSubtitle"
                                value={formData.heroSubtitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Stranger Trips Section Editor */}
                    <div className="space-y-4 border-t pt-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Stranger Trips Section</h3>
                            {!showPackageForm && (
                                <Button type="button" onClick={handleAddPackage} size="sm">
                                    <Plus className="mr-2 h-4 w-4" /> Add Package
                                </Button>
                            )}
                        </div>

                        {/* Package Edit/Add Form */}
                        {showPackageForm && (
                            <Card className="border-2 border-primary/20 bg-muted/30">
                                <CardHeader>
                                    <CardTitle className="text-base font-bold">
                                        {editingPackageId ? "Edit Stranger Package" : "Add Stranger Package"}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="pkg-title">Package Title *</Label>
                                            <Input 
                                                id="pkg-title"
                                                value={packageForm.title || ""} 
                                                onChange={(e) => setPackageForm(prev => ({ ...prev, title: e.target.value }))}
                                                placeholder="e.g. Kashmir Strangers Tour"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pkg-month">Travel Month *</Label>
                                            <Input 
                                                id="pkg-month"
                                                value={packageForm.month || ""} 
                                                onChange={(e) => setPackageForm(prev => ({ ...prev, month: e.target.value }))}
                                                placeholder="e.g. January"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pkg-date">Travel Dates *</Label>
                                            <Input 
                                                id="pkg-date"
                                                value={packageForm.date || ""} 
                                                onChange={(e) => setPackageForm(prev => ({ ...prev, date: e.target.value }))}
                                                placeholder="e.g. Jan 10-18, 2026"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pkg-price">Price *</Label>
                                            <Input 
                                                id="pkg-price"
                                                value={packageForm.price || ""} 
                                                onChange={(e) => setPackageForm(prev => ({ ...prev, price: e.target.value }))}
                                                placeholder="e.g. ₹14,999"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pkg-note">Note (Optional)</Label>
                                            <Input 
                                                id="pkg-note"
                                                value={packageForm.note || ""} 
                                                onChange={(e) => setPackageForm(prev => ({ ...prev, note: e.target.value }))}
                                                placeholder="e.g. Flight Excl."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pkg-link">Package Link *</Label>
                                            <Input 
                                                id="pkg-link"
                                                value={packageForm.link || ""} 
                                                onChange={(e) => setPackageForm(prev => ({ ...prev, link: e.target.value }))}
                                                placeholder="e.g. /destination/kashmir?pkg=kashmir-strangers-4n5d"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <Label>Package Image *</Label>
                                        <CloudinaryUpload 
                                            onUpload={(url) => setPackageForm(prev => ({ ...prev, image: url }))}
                                            defaultImage={packageForm.image}
                                            folder="planet_life/stranger_trips"
                                        />
                                    </div>

                                    <div className="flex gap-2 justify-end pt-2">
                                        <Button type="button" variant="outline" onClick={() => setShowPackageForm(false)}>
                                            Cancel
                                        </Button>
                                        <Button type="button" onClick={handleSavePackage}>
                                            {editingPackageId ? "Update Package" : "Add Package"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* List of existing packages */}
                        <div className="grid gap-4 mt-2">
                            {(formData.strangerTrips || []).length === 0 ? (
                                <p className="text-sm text-muted-foreground py-4 text-center">No packages added. Default packages will be shown on the home page.</p>
                            ) : (
                                (formData.strangerTrips || []).map((pkg) => (
                                    <div key={pkg.id} className="flex items-center justify-between p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <img 
                                                src={getImageSrc(pkg.image)} 
                                                alt={pkg.title} 
                                                className="w-16 h-16 object-cover rounded bg-muted"
                                            />
                                            <div>
                                                <h4 className="font-bold text-sm">{pkg.title}</h4>
                                                <p className="text-xs text-muted-foreground">{pkg.month} | {pkg.date} | {pkg.price}</p>
                                                {pkg.note && <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">{pkg.note}</span>}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button type="button" variant="outline" size="sm" onClick={() => handleEditPackage(pkg)}>
                                                <Edit className="h-4 w-4 mr-1" /> Edit
                                            </Button>
                                            <Button type="button" variant="destructive" size="sm" onClick={() => handleDeletePackage(pkg.id)}>
                                                <Trash className="h-4 w-4 mr-1" /> Delete
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="space-y-4 border-t pt-6">
                        <h3 className="text-lg font-semibold">Trending Destinations Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="destinationsTitle">Section Title</Label>
                            <Input
                                id="destinationsTitle"
                                name="destinationsTitle"
                                value={formData.destinationsTitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="destinationsSubtitle">Section Subtitle</Label>
                            <Textarea
                                id="destinationsSubtitle"
                                name="destinationsSubtitle"
                                value={formData.destinationsSubtitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 border-t pt-6">
                        <h3 className="text-lg font-semibold">Community Section</h3>
                        <div className="space-y-2">
                            <Label htmlFor="communityTitle">Community Title</Label>
                            <Input
                                id="communityTitle"
                                name="communityTitle"
                                value={formData.communityTitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="communitySubtitle">Community Subtitle</Label>
                            <Textarea
                                id="communitySubtitle"
                                name="communitySubtitle"
                                value={formData.communitySubtitle || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full md:w-auto">Save Changes</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default HomeEditor;
